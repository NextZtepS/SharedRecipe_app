<script lang="ts">
    import Badge from "./card-elements/Badge.svelte";
    import Title from "./card-elements/Title.svelte";

    export let uid: string;
    export let menuId: string;
    export let menuImg: string | null;
    export let menuName: string;
    export let userName: string;
    export let tags: string[] = [];
    export let avgRating: number | null;
    export let views: number;
    export let about: string = "";
    export const ingredients = {};
    export const procedures = {};
    export const favoritedBy: string[] = [];
</script>

<main
    class="card card-compact w-full h-full border-2 bg-base-100 shadow-xl overflow-auto hover:overflow-visible"
>
    {#if menuImg}
    <div class="mx-auto">
        <a href="/menu/{menuId}">
            <img
                class="object-cover hover:scale-105 ease-in-out"
                src={menuImg}
                loading="lazy"
                alt=""
            />
        </a>
    </div>
    {/if}

    <div class="card-body">
        <div class="p-2 pt-0">
            <div class="flex items-center justify-between my-2">
                <Title {uid} {menuId} {menuName} {userName} {tags} />
                <Badge {avgRating} {views} />
            </div>

            <p class="mt-4 text-base">{about.substring(0, 300)}</p>
        </div>

        <div class="card-actions justify-center mx-auto mt-auto mb-1">
            <a href="/menu/{menuId}" class="btn btn-primary">explore</a>
        </div>
    </div>
</main>

<style>
    img {
        width: auto;
        height: 350px;
    }
</style>