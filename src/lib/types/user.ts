import type { Timestamp } from "firebase/firestore";

export type user = {
    uid: string;
    name: string;
    email: string;
    photoURL: string;
    latestSignIn: Timestamp;
}
