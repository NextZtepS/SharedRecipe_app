import { writable, type Writable } from "svelte/store";

type state = Writable<"idle" | "processing">;

export const state: state = writable("idle");

export function nowProcessing() {
    state.set("processing");
}

export function nowIdle() {
    state.set("idle");
}