import { db } from "$lib/firebase";
import { arrayRemove, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";

export async function handleAddToFavorite(menuId: string, uid: string) {
    const docPath = doc(db, `menus/${menuId}`);
    try {
        await updateDoc(docPath, {
            favoritedBy: arrayUnion(uid),
            latestUpdated: serverTimestamp()
        });
        console.log("Successfully adding menu to user's favorite!");
        // alert("You have added this menu to your favorite!");
    } catch (err) {
        console.error("Error writing to the database:", err);
    }
}

export async function handleRemoveFromFavorite(menuId: string, uid: string) {
    const docPath = doc(db, `menus/${menuId}`);
    try {
        await updateDoc(docPath, {
            favoritedBy: arrayRemove(uid),
            latestUpdated: serverTimestamp()
        });
        console.log("Successfully removing menu from user's favorite!");
        // alert("You have removed this menu from your favorite!");
    } catch (err) {
        console.error("Error writing to the database:", err);
    }
}
