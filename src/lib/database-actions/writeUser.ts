import { db } from "$lib/firebase";
import type { User } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export async function writeUser(user: User) {
    const docPath = doc(db, `users/${user.uid}`);
    const docData = {
        uid: user.uid,
        name: user.displayName ?? "annonymous",
        email: user.email,
        photoURL: user.photoURL ?? "",
        lastestSignIn: serverTimestamp(),
    };
    try {
        await setDoc(docPath, docData, { merge: true });
        console.log("Successfully writing user to the database!");
    } catch (err) {
        console.error("Error writing to the database:", err);
    }
}