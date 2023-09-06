<script lang="ts">
    import Title from "./card-elements/Title.svelte";
    import Badge from "./card-elements/Badge.svelte";
    import { user } from "$lib/stores/user";
    import { state } from "$lib/stores/state";
    import {
        handleAddToFavorite,
        handleRemoveFromFavorite,
    } from "$lib/database-actions/handleFavorite";
    import { handleRate } from "$lib/database-actions/handleRate";

    export let uid: string;
    export let menuId: string;
    export let menuImg: string | null;
    export let menuName: string;
    export let userName: string;
    export let tags: string[] = [];
    export let avgRating: number | null;
    export let views: number;
    export let about: string;
    export let ingredients: { [key: number]: string } = {};
    export let procedures: { [key: number]: string } = {};
    export let references: string;
    export let favoritedBy: string[] = [];
    export let givenRating: number | null;
</script>

<main
    class="card card-compact w-full h-fit p-4 md:p-8 border-2 bg-base-100 shadow-xl"
>
    <div class="md:flex items-center h-fit">
        {#if menuImg}
            <img
                class="object-cover rounded-2xl ml-2 my-2 mr-auto"
                src={menuImg}
                loading="lazy"
                alt=""
            />
        {/if}

        <div class="flex flex-auto items-center ml-2 p-2">
            <Title
                style="ml-2 mr-auto"
                {uid}
                {menuId}
                {menuName}
                {userName}
                {tags}
            />

            <div
                class="flex flex-col space-y-5 mx-2 text-center items-center w-fit"
            >
                <Badge {avgRating} {views} />

                {#if $user}
                    {#if favoritedBy.includes($user.uid)}
                        <button
                            class="btn btn-primary w-full"
                            on:click|preventDefault={async () => {
                                if ($state === "idle") {
                                    state.nowProcessing();
                                    await handleRemoveFromFavorite(
                                        menuId,
                                        $user?.uid ?? ""
                                    );
                                    state.nowIdle();
                                }
                            }}
                        >
                            {#if $state === "idle"}
                                Remove from ♡
                            {:else if $state === "processing"}
                                <span class="loading loading-dots loading-md" />
                            {/if}
                        </button>
                    {:else}
                        <button
                            class="btn btn-primary w-full"
                            on:click|preventDefault={async () => {
                                if ($state === "idle") {
                                    state.nowProcessing();
                                    await handleAddToFavorite(
                                        menuId,
                                        $user?.uid ?? ""
                                    );
                                    state.nowIdle();
                                }
                            }}
                        >
                            {#if $state === "idle"}
                                Add to ♡
                            {:else if $state === "processing"}
                                <span class="loading loading-dots loading-md" />
                            {/if}
                        </button>
                    {/if}
                {/if}
            </div>
        </div>
    </div>

    <div class="card-body">
        <h2 class="card-title text-2xl mt-4 mb-2">About</h2>
        <p class="card-normal text-lg">{about.substring(0, 300)}</p>

        <h2 class="card-title text-2xl mt-2">Ingredient</h2>
        <div
            class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
            {#each Object.entries(ingredients) as [key, ingredient]}
                <li class="text-lg">{ingredient}</li>
            {/each}
        </div>

        <h2 class="card-title text-2xl mt-4">Procedure</h2>
        <ol>
            {#each Object.entries(procedures) as [key, procedure]}
                <li class="text-lg mb-3">{key}) {procedure}</li>
            {/each}
        </ol>

        <h2 class="card-title text-2xl mt-4 mb-2">References</h2>
        <p class="card-normal text-lg">{references}</p>
    </div>

    {#if $user}
        <div class="card-actions justify-center m-auto">
            <input
                type="number"
                class="inline-flex ml-2 input input-bordered w-20"
                min="0"
                max="10"
                bind:value={givenRating}
            />
            <button
                class="btn btn-primary px-6"
                on:click|preventDefault={async () => {
                    if ($state === "idle") {
                        state.nowProcessing();
                        await handleRate(menuId, $user?.uid ?? "", givenRating);
                        state.nowIdle();
                    }
                }}
            >
                {#if $state === "idle"}
                    Rate
                {:else if $state === "processing"}
                    <span class="loading loading-dots loading-md" />
                {/if}
            </button>
        </div>
        <h2 class="text-base text-center p-4">
            Please help us rate this menu from 0 to 10
        </h2>
    {/if}
</main>

<style>
    img {
        width: auto;
        height: 200px;
    }
</style>
