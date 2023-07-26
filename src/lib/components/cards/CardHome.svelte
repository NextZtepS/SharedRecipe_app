<script lang="ts">
    export let uid: string;
    export let menuId: string;
    export let menuImg: string;
    export let menuName: string;
    export let userName: string;
    export let tags: string[] = [];
    export let avgRating: number;
    export let views: number;
    export let about: string = "";
    export const ingredients = {};
    export const procedures = {};
    export const favoritedBy: string[] = [];
</script>

<div
    class="card card-compact w-full h-full border-2 bg-base-100 shadow-xl overflow-auto"
>
    {#if menuImg}
        <a
            href="/menu/{menuId}"
            class="h-96 md:h-3/5"
        >
            <img
                class="object-cover h-full mx-auto"
                src={menuImg}
                loading="lazy"
                alt=""
            />
        </a>
    {/if}

    <div class="card-body">
        <div class="flex items-center justify-between my-2">
            <div>
                <a href="/menu/{menuId}" class="card-title">{menuName}</a>
                <a href="/user/{uid}" class="card-normal block mb-1"
                    >By {userName}
                </a>
                {#each tags as tag}
                    <h3 class="badge badge-ghost mr-0.5 mt-0.5">#{tag}</h3>
                {/each}
            </div>

            <div
                class="text-center p-3 rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary"
            >
                {#if avgRating}
                    <h3 class="text-xl text-neutral-100">{avgRating.toFixed(2)}</h3>
                {:else}
                    <h3 class="text-xl text-neutral-100">-</h3>
                {/if}
                <h2 class="text-xs text-neutral-100">views: {views}</h2>
            </div>
        </div>

        <p class="text-xs">{about.substring(0, 300)}</p>
    </div>

    <div class="card-actions justify-center mx-auto mb-4">
        <a
            href="/menu/{menuId}"
            class="btn btn-primary"
        >
            explore
        </a>
    </div>
</div>
