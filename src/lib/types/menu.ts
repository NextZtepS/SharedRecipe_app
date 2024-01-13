import type { Timestamp } from "firebase/firestore";

export type menu = {
    menuId: string;
    menuName: string;
    menuImg: string | null;
    uid: string;
    userName: string;
    tags: string[];
    keywords: string[];
    about: string;
    ingredients: { [key: number]: string };
    procedures: { [key: number]: string };
    references: string;
    visibility: "public" | "private";
    ratings: { [key: string]: number };
    avgRating: number | null;
    views: number;
    favoritedBy: string[];
    latestEdited: Timestamp;
    latestUpdated: Timestamp;
}
