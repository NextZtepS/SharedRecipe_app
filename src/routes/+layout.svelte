<script lang="ts">
    import "../app.css";
    import { auth, user } from "$lib/firebase";
    import {
        GoogleAuthProvider,
        signInWithPopup,
        signOut,
    } from "firebase/auth";
    import { writeUser } from "$lib/database-actions/writeUser";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
    }

    $user;
    $: if ($user) {
        writeUser($user);
    }

    function forceReload() {
        location.href = "/";
    }
</script>

<div class="navbar bg-primary p-4 lg:p-8 mb-6 text-neutral-100">
    <div class="navbar-start">
        <a
            href="/"
            class="btn btn-ghost normal-case text-2xl lg:text-3xl"
            on:click={forceReload}>Shared•Recipe</a
        >
    </div>

    <div class="navbar-end">
        {#if $user}
            <h1
                class="text-right text-base lg:text-lg my-auto mr-2 md:mr-3 lg:mr-4"
            >
                {$user?.displayName}
            </h1>
        {:else}
            <button
                on:click={signInWithGoogle}
                class="btn-ghost p-3 rounded-lg text-lg font-semibold mr-2 md:mr-3 lg:mr-4"
            >
                Sign in
            </button>
        {/if}
        <div class="dropdown dropdown-end">
            {#if $user}
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label
                    tabindex="0"
                    class="btn btn-ghost btn-circle avatar mt-0.5"
                >
                    <img
                        class="rounded-full"
                        src={$user.photoURL}
                        alt={$user.displayName?.substring(0, 1)}
                    />
                </label>
            {/if}
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
            >
                {#if $user}
                    <li>
                        <a
                            href="/user/{$user.uid}"
                            class="text-lg text-neutral"
                        >
                            Your menu
                        </a>
                    </li>
                    <li>
                        <a
                            href="/user/your-favorite"
                            class="text-lg text-neutral"
                        >
                            Your favorite
                        </a>
                    </li>
                    <li>
                        <button
                            on:click={() => signOut(auth)}
                            class="text-lg text-neutral"
                        >
                            Sign out
                        </button>
                    </li>
                {:else}
                    <li>
                        <button
                            on:click={signInWithGoogle}
                            class="text-lg text-neutral"
                        >
                            Sign in
                        </button>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
</div>

<div class="p-2 md:p-4">
    <slot />
</div>

<footer class="footer footer-center p-10 mt-6 bg-secondary text-neutral-100">
    <div>
        <p class="font-bold">
            created by NextZtepS <br />Developer, Harvey Mudd College '26
        </p>
    </div>
    <div>
        <div class="grid grid-flow-col gap-4">
            <a href="mailto:natdanaiongarjvaja@gmail.com">
                <img alt="email" src="/icons/email.png" width="32" />
            </a>
            <a href="https://github.com/NextZtepS/SharedRecipe-app">
                <img alt="github" src="/icons/github.png" width="32" />
            </a>
            <a href="https://github.com/NextZtepS">
                <img alt="personal" src="/icons/user.png" width="32" />
            </a>
        </div>
    </div>
</footer>
