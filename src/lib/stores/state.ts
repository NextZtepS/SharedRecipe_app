import type { Unsubscriber } from "svelte/motion";
import { writable, type Writable } from "svelte/store";

type possibleState = "idle" | "processing";
interface stateStore {
    subscribe: (arg: any) => Unsubscriber,
    nowIdle: () => void,
    nowProcessing: () => void,
    set: (state: possibleState) => void
}

function stateStore() {
    const { subscribe, set }: Writable<possibleState> = writable("idle");

    return {
        subscribe,
        nowIdle: () => set("idle"),
        nowProcessing: () => set("processing"),
        set: (state: possibleState) => set(state)
    };
}

export const state: stateStore = stateStore();