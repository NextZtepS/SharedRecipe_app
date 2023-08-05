import type { Timestamp } from "firebase/firestore";

export interface menu {
    menuId: string,
    menuName: string,
    menuImg: string,
    uid: string,
    userName: string,
    tags: string[],
    keywords: string[],
    about: string,
    ingredients: { [key: number]: string },
    procedures: { [key: number]: string },
    visibility: "public" | "private",
    ratings: { [key: string]: number },
    avgRating: number | null,
    views: number,
    favoritedBy: string[],
    lastestEdited: Timestamp
}