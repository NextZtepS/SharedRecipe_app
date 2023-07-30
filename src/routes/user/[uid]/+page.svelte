<script lang="ts">
    import CardUser from "$lib/components/cards/CardUser.svelte";
    import GridSecondary from "$lib/components/utils/GridSecondary.svelte";
    import { user } from "$lib/firebase";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { author, menus } = data;
</script>

{#if author}
    <h2 class="text-3xl font-semibold font-serif ml-6 mt-4 mb-8">
        Menu shared by {author.name}:
    </h2>

    {#if $user?.uid == author.uid}
        <a href="/menu/create" class="btn btn-accent flex mx-auto w-48 md:w-72">
            Add New Menu
        </a>
    {/if}

    <GridSecondary>
        {#if $user?.uid == author.uid}
            {#each menus as menu}
                <CardUser
                    uid={menu.uid}
                    menuId={menu.menuId}
                    menuImg={menu.menuImg}
                    menuName={menu.menuName}
                    tags={menu.tags}
                    avgRating={menu.avgRating}
                    views={menu.views}
                    about={menu.about}
                />
            {/each}
        {:else}
            {#each menus as menu}
                {#if menu.visibility === "public"}
                    <CardUser
                        uid={menu.uid}
                        menuId={menu.menuId}
                        menuImg={menu.menuImg}
                        menuName={menu.menuName}
                        tags={menu.tags}
                        avgRating={menu.avgRating}
                        views={menu.views}
                        about={menu.about}
                    />
                {/if}
            {/each}
        {/if}
    </GridSecondary>
{:else}
    <div class="alert-error text-center">
        <p class="text-error text-xl m-6">Cannot find the user!</p>
        <a class="btn btn-error mb-6" href="/">Return to Homepage</a>
    </div>
{/if}
