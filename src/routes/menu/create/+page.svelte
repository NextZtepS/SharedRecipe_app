<script lang="ts">
    import AuthCheck from "$lib/components/utils/AuthCheck.svelte";
    import { user } from "$lib/firebase";
    import { writeNewMenu } from "$lib/database-actions/writeNewMenu";
    import { nowIdle, nowProcessing, state } from "$lib/stores/state";
    import { fly } from "svelte/transition";

    let numProcedure = 1;
    let numIngredient = 1;
    let Img: FileList;
    let previewURL: string;
    $: if (Img) {
        previewURL = URL.createObjectURL(Img[0]);
    }

    let menuName: string = "";
    let tagString: string = "";
    let about: string = "";
    let ingredients: { [key: number]: string } = {};
    let precedures: { [key: number]: string } = {};
    let visibility: "public" | "private" = "public";
</script>

<main in:fly={{ y: 50, duration: 500 }}>
    <AuthCheck>
        <div class="p-6 md:px-8">
            <form
                class="card card-compact w-full h-full p-6 sm:p-10 border-2 bg-base-100 shadow-xl"
            >
                <div class="form-control w-full max-w-xs mx-auto my-4">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label font-semibold"
                        >Upload the photo of the menu</label
                    >
                    <img
                        class="p-3"
                        src={previewURL ?? ""}
                        alt=""
                        width="256"
                    />
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
                        <span
                            class="indicator-item badge badge-warning text-xs"
                        >
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
                    <label class="label font-semibold">Ingredient</label>

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
                            bind:value={precedures[index + 1]}
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
                        if ($state === "idle") {
                            nowProcessing();
                            await writeNewMenu(
                                Img,
                                menuName,
                                $user?.displayName ?? "",
                                $user?.uid ?? "",
                                tagString,
                                about,
                                ingredients,
                                precedures,
                                visibility
                            );
                            nowIdle();
                        }
                    }}
                >
                    {#if $state === "idle"}
                        Publish
                    {:else if $state === "processing"}
                        <span class="loading loading-dots loading-md" />
                    {/if}
                </button>
            </form>
        </div>
    </AuthCheck>
</main>
