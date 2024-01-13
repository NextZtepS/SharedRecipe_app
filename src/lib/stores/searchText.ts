import { writable, type Writable, type Unsubscriber } from "svelte/store";

type searchText = {
    subscribe: (arg: any) => Unsubscriber;
}

function searchTextStore() {
    const { subscribe }: Writable<string> = writable("");

    return {
        subscribe,
    };
}

export const searchText: searchText = searchTextStore();
