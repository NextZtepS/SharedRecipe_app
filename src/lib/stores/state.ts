import { writable, type Writable, type Unsubscriber } from "svelte/store";

type possibleState = "idle" | "processing";
type state  = {
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

export const state: state = stateStore();