<script lang="ts">
    import { user } from "$lib/firebase";
    import {
        handleAddToFavorite,
        handleRemoveFromFavorite,
    } from "$lib/database-actions/handleFavorite";
    import { handleRate } from "$lib/database-actions/handleRate";

    export let uid: string;
    export let menuId: string;
    export let menuImg: string;
    export let menuName: string;
    export let userName: string;
    export let tags: string[] = [];
    export let avgRating: number;
    export let views: number;
    export let about: string = "";
    export let ingredients: { [key: number]: string } = {};
    export let procedures: { [key: number]: string } = {};
    export let favoritedBy: string[] = [];
    export let givenRating: number | null;
</script>

<div
    class="card card-compact w-full h-full p-4 sm:p-10 border-2 bg-base-100 shadow-xl"
>
    <div class="flex items-center">
        {#if menuImg}
            <img
                class="object-cover w-44 sm:w-56 lg:w-64 pr-2 mr-2"
                src={menuImg}
                loading="lazy"
                alt=""
            />
        {/if}
        
        <div class="mr-auto ml-2">
            <a href="/menu/{menuId}" class="card-title">{menuName}</a>
            <a href="/user/{uid}" class="card-normal block mb-1"
                >By {userName}</a
            >
            {#each tags as tag}
                <h3 class="badge badge-ghost mr-0.5 mt-0.5">#{tag}</h3>
            {/each}
        </div>

        <div
            class="flex flex-col space-y-5 mx-2 text-center items-center w-fit"
        >
            <div
                class="text-center w-max p-3 rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary"
            >
                {#if avgRating}
                    <h3 class="text-xl text-neutral-100">{avgRating.toFixed(2)}</h3>
                {:else}
                    <h3 class="text-xl text-neutral-100">-</h3>
                {/if}
                <h3 class="text-xs text-neutral-100">views: {views}</h3>
            </div>
            {#if $user}
                {#if favoritedBy.includes($user.uid)}
                    <button
                        class="btn btn-primary w-full"
                        on:click|preventDefault={async () =>
                            handleRemoveFromFavorite(menuId, $user?.uid ?? "")}
                    >
                        remove from ♡
                    </button>
                {:else}
                    <button
                        class="btn btn-primary w-full"
                        on:click|preventDefault={async () =>
                            handleAddToFavorite(menuId, $user?.uid ?? "")}
                    >
                        add to ♡
                    </button>
                {/if}
            {/if}
        </div>
    </div>

    <div class="card-body">
        <h2 class="card-title mt-2">About</h2>
        <p class="card-normal">{about.substring(0, 300)}</p>

        <h2 class="card-title mt-2">Ingredient</h2>
        <div
            class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
            {#each Object.entries(ingredients) as [key, ingredient]}
                <li>{ingredient}</li>
            {/each}
        </div>

        <h2 class="card-title mt-4">Procedure</h2>
        <ul>
            {#each Object.entries(procedures) as [key, procedure]}
                <li class="mb-3">{key}) {procedure}</li>
            {/each}
        </ul>
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
                on:click|preventDefault={async () =>
                    handleRate(menuId, $user?.uid ?? "", givenRating)}
            >
                rate
            </button>
        </div>
        <h2 class="text-sm text-center p-4">
            Please help us rate this menu from 0 to 10
        </h2>
    {/if}
</div>
