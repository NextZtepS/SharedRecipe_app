<script lang="ts">
    export let uid: string = "";
    export let menuId: string = "";
    export let menuName: string = "";
    export let userName: string = "";
    export let tags: string[] = [];

    export let style: string = "";
</script>

<main class={style}>
    <a href="/menu/{menuId}" class="card-title text-2xl">{menuName}</a>

    {#if userName}
        <a href="/user/{uid}" class="card-normal text-xl block mb-1"
            >By {userName}
        </a>
    {/if}

    {#each tags as tag}
        <h3 class="badge badge-ghost text-lg p-2 mr-1 mt-1">
            #{tag}
        </h3>
    {/each}

    <slot />
</main>
