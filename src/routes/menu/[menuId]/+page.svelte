<script lang="ts">
    import CardMenu from "$lib/components/cards/CardMenu.svelte";
    import { db } from "$lib/firebase";
    import type { menu } from "$lib/types/menu";
    import { user } from "$lib/stores/user";
    import { state } from "$lib/stores/state";
    import { doc, getDoc } from "firebase/firestore";
    import { fly } from "svelte/transition";
    import type { PageData } from "./$types";

    export let data: PageData;
    let { menu } = data;

    $: if ($state === "processing" && menu) {
        const docPath = doc(db, `menus/${menu.menuId}`);
        setTimeout(async () => {
            getDoc(docPath)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        menu = docSnapshot.data() as menu;
                        console.log(
                            "Successfully updating menu from the database!"
                        );
                    } else {
                        console.log("Cannot find the updated menu!");
                    }
                })
                .catch((err) => {
                    console.error("Error reading from the database:", err);
                });
        }, 100);
    }
</script>

<svelte:head>
    <title>{menu?.menuName ?? "Menu"} - SharedRecipe</title>
</svelte:head>

<main in:fly={{ y: 50, duration: 500 }}>
    <div class="p-6 md:px-8">
        {#key menu}
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
                        references={menu.references}
                        favoritedBy={menu.favoritedBy}
                        givenRating={menu.ratings[$user?.uid ?? ""]}
                    />
                {:else}
                    <div class="alert-warning text-center">
                        <p class="text-warning text-xl m-6">
                            This menu is private!
                        </p>
                        <a class="btn btn-warning mb-6" href="/">
                            Return to Homepage
                        </a>
                    </div>
                {/if}
            {:else}
                <div class="alert-error text-center">
                    <p class="text-error text-xl m-6">Cannot find the menu!</p>
                    <a class="btn btn-error mb-6" href="/">Return to Homepage</a
                    >
                </div>
            {/if}
        {/key}
    </div>
</main>
