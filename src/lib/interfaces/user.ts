import type { Timestamp } from "firebase/firestore";

export interface user {
    uid: string,
    name: string,
    email: string,
    photoURL: string
    lastestSignIn: Timestamp,
}