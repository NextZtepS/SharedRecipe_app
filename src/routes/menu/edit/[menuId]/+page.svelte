<script lang="ts">
    import { user } from "$lib/firebase";
    import { reverseTagString } from "$lib/utils/tags";
    import { writeMenu } from "$lib/database-actions/writeMenu";
    import { deleteMenu } from "$lib/database-actions/deleteMenu";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { menu } = data;

    let Img: FileList;
    $: if (Img) {
        previewURL = URL.createObjectURL(Img[0]);
    }

    // sync the data from the database
    let previewURL = menu?.menuImg;
    let menuName = menu?.menuName;
    let menuId = menu?.menuId;
    let tagString = reverseTagString(menu?.tags ?? []);
    let about = menu?.about;
    let ingredients = menu?.ingredients ?? {};
    let numIngredient: string | number = Object.keys(ingredients).slice(-1)[0];
    if (numIngredient) numIngredient = +numIngredient;
    else numIngredient = 1;
    let procedures = menu?.procedures ?? {};
    let numProcedure: string | number = Object.keys(procedures).slice(-1)[0];
    if (numProcedure) numProcedure = +numProcedure;
    else numProcedure = 1;
    let visibility: "public" | "private" = menu?.visibility ?? "private";

    export let processing = false;
</script>

{#if menu?.uid === $user?.uid}
    <div class="p-6 md:px-8">
        <form
            class="card card-compact w-full h-full p-6 sm:p-10 border-2 bg-base-100 shadow-xl"
        >
            <div class="form-control w-full max-w-xs mx-auto my-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold"
                    >Upload the photo of the menu</label
                >
                <img class="p-3" src={previewURL ?? ""} alt="" width="256" />
                <input
                    type="file"
                    class="file-input file-input-bordered w-full max-w-xs"
                    accept="image/png, image/jpeg"
                    bind:files={Img}
                />
            </div>

            <div class="form-control w-full max-w-sm mb-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold">Menu name</label>
                <div class="indicator">
                    <span class="indicator-item badge badge-warning text-xs">
                        Required
                    </span>
                    <input
                        type="text"
                        placeholder="Name of your menu"
                        class="input input-bordered w-full"
                        bind:value={menuName}
                    />
                </div>
            </div>

            <div class="form-control w-full max-w-lg mb-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold">Tag</label>
                <input
                    type="text"
                    placeholder="please separate each tag with a space e.g. #tag1 #tag2 #..."
                    class="input input-bordered w-full"
                    bind:value={tagString}
                />
            </div>

            <div class="form-control mb-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold">About</label>
                <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="About your menu"
                    bind:value={about}
                />
            </div>

            <div class="form-control mb-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold">Ingrediant</label>

                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="px-2 mb-2">
                    <label class="inline-flex text-sm">
                        How many ingredients are there?
                    </label>
                    <input
                        type="number"
                        class="inline-flex ml-2 input input-bordered w-20 h-8"
                        min="0"
                        bind:value={numIngredient}
                    />
                </div>

                <div
                    class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                >
                    {#each Array(numIngredient) as _, index}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <input
                            type="text"
                            placeholder="what & how much?"
                            class="input input-bordered w-full"
                            min="0"
                            bind:value={ingredients[index + 1]}
                        />
                    {/each}
                </div>
            </div>

            <div class="form-control mb-4">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label font-semibold">Procedure</label>

                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="px-2 mb-2">
                    <label class="inline-flex text-sm">
                        How many steps are there?
                    </label>
                    <input
                        type="number"
                        class="inline-flex ml-2 input input-bordered w-20 h-8"
                        bind:value={numProcedure}
                    />
                </div>

                {#each Array(numProcedure) as _, index}
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="inline-flex text-sm mt-3 mb-1 ml-3">
                        {index + 1})
                    </label>
                    <textarea
                        class="textarea textarea-bordered h-20 ml-4"
                        placeholder="How to cook your menu"
                        bind:value={procedures[index + 1]}
                    />
                {/each}
            </div>

            <div class="flex align-middle px-2 mt-3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="inline-flex text-md font-semibold mt-1">
                    Please choose your menu's visibility
                </label>
                <select
                    class="select select-bordered select-sm max-w-xs inline-flex w-32 h-8 ml-2"
                    bind:value={visibility}
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>

            <button
                class="form-control btn btn-success mx-auto mt-8"
                on:click|preventDefault={async () => {
                    if (!processing) {
                        processing = true;
                        await writeMenu(
                            previewURL ?? "",
                            Img,
                            menuName ?? "",
                            menuId ?? "",
                            $user?.displayName ?? "",
                            $user?.uid ?? "",
                            tagString,
                            about ?? "",
                            ingredients,
                            procedures,
                            visibility
                        );
                        processing = false;
                    }
                }}
            >
                {#if !processing}
                    save
                {:else}
                    <span class="loading loading-dots loading-md" />
                {/if}
            </button>

            <button
                class="form-control btn btn-error mx-auto mt-6"
                on:click|preventDefault|once={async () => {
                    if (!processing) {
                        processing = true;
                        await deleteMenu(menuId ?? "", $user?.uid ?? "");
                        processing = false;
                    }
                }}
            >
                {#if !processing}
                    delete
                {:else}
                    <span class="loading loading-dots loading-md" />
                {/if}
            </button>
        </form>
    </div>
{:else}
    <div class="alert-error text-center">
        <p class="text-error text-xl m-6">
            You have no permission to edit this menu!
        </p>
        <a class="btn btn-error mb-6" href="/">Return to Homepage</a>
    </div>
{/if}
