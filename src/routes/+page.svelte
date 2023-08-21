<script lang="ts">
    import CardHome from "$lib/components/cards/CardHome.svelte";
    import GridPrimary from "$lib/components/utils/GridPrimary.svelte";
    import {
        QueryDocumentSnapshot,
        collection,
        getDocs,
        limit,
        orderBy,
        query,
        startAfter,
        where,
    } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import type { menu } from "$lib/interfaces/menu";
    import { state } from "$lib/stores/state";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";

    export let data: PageData;
    let { menus, lastDoc } = data;

    async function loadMoreHomeMenu() {
        if (!lastDoc) return;
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            orderBy("latestEdited", "desc"),
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
    let lastSearchDoc: QueryDocumentSnapshot | undefined;

    async function handleSearch() {
        searched = true;
        searchedMenus = [];
        if (!searchKey) searchKey = "";
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            where(
                "keywords",
                "array-contains",
                searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            ),
            orderBy("latestEdited", "desc"),
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
            if ($state === "idle") {
                state.nowProcessing();
                await handleSearch();
                state.nowIdle();
            }
        }
    }

    async function loadMoreSearchedMenu() {
        if (!lastSearchDoc) return;
        if (!searchKey) searchKey = "";
        const menusQuery = query(
            collection(db, "menus"),
            where("visibility", "==", "public"),
            where(
                "keywords",
                "array-contains",
                searchKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            ),
            orderBy("latestEdited", "desc"),
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

<main in:fly={{ y: 50, duration: 400, delay: 500 }} out:fade>
    <div class="flex justify-center">
        <div
            class="flex justify-center p-2.5 mb-1 rounded-xl sm:w-3/5 bg-accent"
        >
            <input
                type="text"
                placeholder="Menu / User / Tag"
                class="input input-bordered w-44 sm:w-auto flex-grow"
                bind:value={searchKey}
                on:keydown={handleKeypress}
            />
            <button
                class="btn btn-neutral ml-1.5 text-base-200"
                on:click|preventDefault={async () => {
                    if ($state === "idle") {
                        state.nowProcessing()
                        await handleSearch();
                        state.nowIdle();
                    }
                }}
            >
                {#if $state === "idle"}
                    Search
                {:else if $state === "processing"}
                    <span class="loading loading-dots loading-md" />
                {/if}
            </button>
        </div>
    </div>

    {#if searched && searchedMenus.length === 0}
        <div class="text-center m-6 mt-20">
            <p class="text-xl m-2">Cannot find any menu!</p>
            <p class="text-xl m-2">Please try again!</p>
        </div>
    {/if}

    <GridPrimary>
        {#if searched}
            {#each searchedMenus as menu}
                <div in:fly={{ y: 50, duration: 400, delay: 500 }} out:fade>
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
                </div>
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
        <div in:fly={{ y: 50, duration: 500 }}>
            <button
                class="btn btn-accent flex mx-auto w-48 md:w-72 mt-4"
                on:click|preventDefault={async () => {
                    if ($state === "idle") {
                        state.nowProcessing()
                        await loadMoreSearchedMenu();
                        state.nowIdle();
                    }
                }}
            >
                {#if $state === "idle"}
                    Load More Result
                {:else if $state === "processing"}
                    <span class="loading loading-dots loading-md" />
                {/if}
            </button>
        </div>
    {:else}
        <button
            class="btn btn-accent flex mx-auto w-48 md:w-72 mt-4"
            on:click|preventDefault={async () => {
                if ($state === "idle") {
                    state.nowProcessing();
                    await loadMoreHomeMenu();
                    state.nowIdle();
                }
            }}
        >
            {#if $state === "idle"}
                Load More Menu
            {:else if $state === "processing"}
                <span class="loading loading-dots loading-md" />
            {/if}
        </button>
    {/if}
</main>
