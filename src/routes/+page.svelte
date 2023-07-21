<script lang="ts">
    import CardHome from "$lib/components/cards/CardHome.svelte";
    import {
        collection,
        getDocs,
        limit,
        orderBy,
        query,
        startAfter,
        where,
    } from "firebase/firestore";
    import type { PageData } from "./$types";
    import { db } from "$lib/firebase";

    export let data: PageData;
    let { menus, lastDoc } = data;

    async function loadMoreHomeMenu() {
        const menusQuery = query(
            collection(db, "menus"),
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
            menus = [...menus, doc.data()];
        });
        lastDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }

    let searchKey: string;
    let searched: boolean = false;
    let searchedMenus: any[] = [];
    let lastSearchDoc;

    async function handleSearch() {
        searched = true;
        searchedMenus = [];
        const menusQuery = query(
            collection(db, "menus"),
            where("keywords", "array-contains", searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()),
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
            searchedMenus = [...searchedMenus, doc.data()];
        });
        lastSearchDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }

    async function loadMoreSearchedMenu() {
        if (!searchKey) searchKey = " ";
        const menusQuery = query(
            collection(db, "menus"),
            where("keywords", "array-contains", searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()),
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
            searchedMenus = [...searchedMenus, doc.data()];
        });
        lastSearchDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
    }
</script>

<div class="flex justify-center sm:mb-2 mt-3 sm:mt-2">
    <div class="bg-accent p-2.5 rounded-full flex justify-center sm:w-3/5">
        <input
            type="text"
            placeholder="Menu / User / Tag"
            class="input input-bordered w-44 sm:w-auto flex-grow"
            bind:value={searchKey}
        />
        <button
            class="btn btn-neutral ml-1.5"
            on:click|preventDefault={handleSearch}
        >
            Search
        </button>
    </div>
</div>

<div
    class="grid py-6 px-8 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
>
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
</div>

{#if searched}
    <button
        class="btn btn-accent flex mx-auto w-48 md:w-72 my-4"
        on:click|preventDefault={loadMoreSearchedMenu}
    >
        Load More Result
    </button>
{:else}
    <button
        class="btn btn-accent flex mx-auto w-48 md:w-72 my-4"
        on:click|preventDefault={loadMoreHomeMenu}
    >
        Load More Menu
    </button>
{/if}
