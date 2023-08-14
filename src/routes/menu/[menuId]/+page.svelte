<script lang="ts">
    import CardMenu from "$lib/components/cards/CardMenu.svelte";
    import { user } from "$lib/firebase";
    import type { PageData } from "./$types";
    import FlyIn from "$lib/components/utils/FlyIn.svelte";

    export let data: PageData;
    const { menu } = data;
</script>

<FlyIn y={50} duration={500}>
    <main class="p-6 md:px-8">
        {#if menu}
            {#if menu.visibility === "public"}
                <CardMenu
                    uid={menu.uid}
                    menuId={menu.menuId}
                    menuImg={menu.menuImg}
                    menuName={menu.menuName}
                    userName={menu.userName}
                    tags={menu.tags}
                    avgRating={menu.avgRating}
                    views={menu.views}
                    about={menu.about}
                    ingredients={menu.ingredients}
                    procedures={menu.procedures}
                    favoritedBy={menu.favoritedBy}
                    givenRating={menu.ratings[$user?.uid ?? ""]}
                />
            {:else}
                <div class="alert-warning text-center">
                    <p class="text-warning text-xl m-6">
                        This menu is private!
                    </p>
                    <a class="btn btn-warning mb-6" href="/"
                        >Return to Homepage</a
                    >
                </div>
            {/if}
        {:else}
            <div class="alert-error text-center">
                <p class="text-error text-xl m-6">Cannot find the menu!</p>
                <a class="btn btn-error mb-6" href="/">Return to Homepage</a>
            </div>
        {/if}
    </main>
</FlyIn>
