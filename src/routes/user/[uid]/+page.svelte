<script lang="ts">
    import CardUser from "$lib/components/cards/CardUser.svelte";
    import type { PageData } from "./$types";
    import { user } from "$lib/firebase";

    export let data: PageData;
    const { uid, menus } = data;
</script>

{#if $user?.uid == uid}
    <a
        href="/menu/create"
        class="btn btn-accent flex mx-auto w-48 md:w-72 my-2"
    >
        Add New Menu
    </a>
{/if}

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
