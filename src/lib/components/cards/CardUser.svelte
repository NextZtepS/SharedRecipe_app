<script lang="ts">
    import Badge from "./card-elements/Badge.svelte";
    import Title from "./card-elements/Title.svelte";
    import { user } from "$lib/stores/user";

    export let uid: string;
    export let menuId: string;
    export let menuImg: string | null;
    export let menuName: string;
    export const userName = "";
    export let tags: string[];
    export let avgRating: number | null;
    export let views: number;
    export let about: string;
    export const ingredients = {};
    export const procedures = {};
    export const references = "";
    export const favoritedBy: string[] = [];
</script>

<main
    class="card card-compact w-full h-full p-4 md:p-6 border-2 bg-base-100 shadow-xl overflow-auto hover:overflow-visible"
>
    <div class="md:flex items-center my-auto">
        {#if menuImg}
            <a href="/menu/{menuId}">
                <img
                    class="object-cover flex-auto rounded-2xl mx-auto hover:scale-105 ease-in-out"
                    src={menuImg}
                    loading="lazy"
                    alt=""
                />
            </a>
        {/if}

        <div class="flex flex-1 items-center mt-2">
            <Title style="p-2 md:ml-2 mr-auto" {uid} {menuId} {menuName} {tags}>
                <p class="text-base mt-2">
                    {about.substring(0, 300) ?? ""}
                </p>
            </Title>

            <div class="flex flex-col space-y-5 p-2 ml-auto my-2 text-center">
                <Badge {avgRating} {views} />
                {#if $user?.uid == uid}
                    <a href="/menu/edit/{menuId}" class="btn btn-primary">
                        edit
                    </a>
                {:else}
                    <a href="/menu/{menuId}" class="btn btn-primary">
                        explore
                    </a>
                {/if}
            </div>
        </div>
    </div>
</main>

<style>
    img {
        width: auto;
        height: 200px;
    }
</style>