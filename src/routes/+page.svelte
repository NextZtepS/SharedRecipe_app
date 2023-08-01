<script lang="ts">
    import CardHome from "$lib/components/cards/CardHome.svelte";
    import GridPrimary from "$lib/components/utils/GridPrimary.svelte";
    import {
        collection,
        getDocs,
        limit,
        orderBy,
        query,
        startAfter,
        where,
    } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import type { PageData } from "./$types";
    import type { menu } from "$lib/interfaces/menu";

    export let data: PageData;
    let { menus, lastDoc } = data;

    async function loadMoreHomeMenu() {
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            orderBy("lastestEdited", "desc"),
            startAfter(lastDoc),
            limit(12)
        );

        let querySnapshot;
        try {
            console.log(
                "Successfully reading more homepage menus from the database!"
            );
            querySnapshot = await getDocs(menusQuery);
        } catch (err) {
            console.error("Error reading from the database:", err);
        }

        querySnapshot?.forEach((doc) => {
            menus = [...menus, doc.data() as menu];
        });
        lastDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }

    let searchKey: string;
    let searched: boolean = false;
    let searchedMenus: menu[] = [];
    let lastSearchDoc;

    async function handleSearch() {
        searched = true;
        searchedMenus = [];
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            where(
                "keywords",
                "array-contains",
                searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            ),
            orderBy("lastestEdited", "desc"),
            limit(24)
        );

        let querySnapshot;
        try {
            console.log(
                "Successfully reading searched menus from the database!"
            );
            querySnapshot = await getDocs(menusQuery);
        } catch (err) {
            console.error("Error reading from the database:", err);
        }

        querySnapshot?.forEach((doc) => {
            searchedMenus = [...searchedMenus, doc.data() as menu];
        });
        lastSearchDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }

    async function handleKeypress(e: KeyboardEvent) {
        let keyPressed = e.key;
        if (keyPressed === "Enter") {
            handleSearch();
        }
    }

    async function loadMoreSearchedMenu() {
        if (!searchKey) searchKey = " ";
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            where(
                "keywords",
                "array-contains",
                searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            ),
            orderBy("lastestEdited", "desc"),
            startAfter(lastDoc),
            limit(12)
        );

        let querySnapshot;
        try {
            console.log(
                "Successfully reading more searched menus from the database!"
            );
            querySnapshot = await getDocs(menusQuery);
        } catch (err) {
            console.error("Error reading from the database:", err);
        }

        querySnapshot?.forEach((doc) => {
            searchedMenus = [...searchedMenus, doc.data() as menu];
        });
        lastSearchDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }
</script>

<div class="flex justify-center">
    <div class="flex justify-center p-2.5 rounded-xl sm:w-3/5 bg-accent">
        <input
            type="text"
            placeholder="Menu / User / Tag"
            class="input input-bordered w-44 sm:w-auto flex-grow"
            bind:value={searchKey}
            on:keydown={handleKeypress}
        />
        <button
            class="btn btn-neutral ml-1.5 text-base-200"
            on:click|preventDefault={handleSearch}
        >
            Search
        </button>
    </div>
</div>

<GridPrimary>
    {#if searched}
        {#each searchedMenus as menu}
            <CardHome
                uid={menu.uid}
                menuId={menu.menuId}
                menuImg={menu.menuImg}
                menuName={menu.menuName}
                userName={menu.userName}
                tags={menu.tags}
                avgRating={menu.avgRating}
                views={menu.views}
                about={menu.about}
            />
        {/each}
    {:else}
        {#each menus as menu}
            <CardHome
                uid={menu.uid}
                menuId={menu.menuId}
                menuImg={menu.menuImg}
                menuName={menu.menuName}
                userName={menu.userName}
                tags={menu.tags}
                avgRating={menu.avgRating}
                views={menu.views}
                about={menu.about}
            />
        {/each}
    {/if}
</GridPrimary>

{#if searched}
    <button
        class="btn btn-accent flex mx-auto w-48 md:w-72 mt-4"
        on:click|preventDefault={loadMoreSearchedMenu}
    >
        Load More Result
    </button>
{:else}
    <button
        class="btn btn-accent flex mx-auto w-48 md:w-72 mt-4"
        on:click|preventDefault={loadMoreHomeMenu}
    >
        Load More Menu
    </button>
{/if}
