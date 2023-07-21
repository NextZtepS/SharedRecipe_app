<script lang="ts">
    import CardUser from "$lib/components/cards/CardUser.svelte";
    import AuthCheck from "$lib/components/utils/AuthCheck.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { menus } = data;
</script>

<AuthCheck>
    {#if menus.length === 0}
        <h1 class="text-center text-xl m-6">You don't have any favorite menu yet!</h1>
    {:else}
        <div class="grid py-6 px-8 gap-6 sm:grid-cols-1 xl:grid-cols-2">
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
        </div>
    {/if}
</AuthCheck>
