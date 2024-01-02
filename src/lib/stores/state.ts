import { writable, type Writable, type Unsubscriber } from "svelte/store";

type possibleState = "idle" | "processing";
type stateStore = {
    subscribe: (arg: any) => Unsubscriber;
    nowIdle: () => void;
    nowProcessing: () => void;
    set: (state: possibleState) => void;
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