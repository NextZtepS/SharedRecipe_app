<script lang="ts">
    import { user } from "$lib/firebase";
    import { handleExplore } from "$lib/database-actions/handleExplore";

    export let uid: string;
    export let menuId: string;
    export let menuImg: string;
    export let menuName: string;
    export const userName = "";
    export let tags: string[];
    export let avgRating: number;
    export let views: number;
    export let about: string;
    export const ingredients = {};
    export const procedures = {};
    export const favoritedBy: string[] = [];
</script>

<div class="card card-compact w-full h-full p-3 border-2 bg-base-100 shadow-xl">
    <div class="sm:flex items-center text-sm">
        {#if menuImg}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                class="object-cover w-52 p-2 mx-2"
                src={menuImg}
                loading="lazy"
                alt=""
            />
        {/if}

        <div class="flex flex-auto items-center">
            <div class="mx-2">
                <h2 class="card-title">{menuName}</h2>
                {#each tags as tag}
                    <h3 class="badge badge-ghost mr-0.5 mt-0.5">#{tag}</h3>
                {/each}
                <p class="text-xs mt-2">{about.substring(0, 300) ?? ""}</p>
            </div>

            <div class="flex flex-col space-y-5 p-2 ml-auto my-2 text-center">
                <div
                    class="text-center w-max p-3 mx-auto rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary"
                >
                    {#if avgRating}
                        <h3 class="text-xl">{avgRating.toFixed(2)}</h3>
                    {:else}
                        <h3 class="text-xl">-</h3>
                    {/if}
                    <h2 class="text-xs">views: {views}</h2>
                </div>
                {#if $user?.uid == uid}
                    <a href="/menu/edit/{menuId}" class="btn btn-primary"
                        >edit</a
                    >
                {:else}
                    <a
                        href="/menu/{menuId}"
                        class="btn btn-primary"
                        on:click={async () => handleExplore(menuId)}>explore</a
                    >
                {/if}
            </div>
        </div>
    </div>
</div>
