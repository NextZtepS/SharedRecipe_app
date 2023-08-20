import { db } from "$lib/firebase";
import { arrayRemove, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";

export async function handleAddToFavorite(menuId: string, uid: string) {
    let successful = true;
    const docPath = doc(db, `menus/${menuId}`);

    try {
        await updateDoc(docPath, {
            favoritedBy: arrayUnion(uid),
            latestUpdated: serverTimestamp()
        });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }
    if (successful) {
        console.log("Successfully adding menu to user's favorite!");
        // alert("You have added this menu to your favorite!");
    }
}

export async function handleRemoveFromFavorite(menuId: string, uid: string) {
    let successful = true;
    const docPath = doc(db, `menus/${menuId}`);

    try {
        await updateDoc(docPath, {
            favoritedBy: arrayRemove(uid),
            latestUpdated: serverTimestamp()
        });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }
    if (successful) {
        console.log("Successfully removing menu from user's favorite!");
        // alert("You have removed this menu from your favorite!");
    }
}