import { db } from "$lib/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export async function handleAddToFavorite(menuId: string, uid: string) {
    let successful = true;
    const docPath = doc(db, `menus/${menuId}`);

    try {
        await updateDoc(docPath, {
            favoritedBy: arrayUnion(uid),
        });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }
    if (successful) {
        console.log("Successfully adding menu to user's favorite!");
        alert("You have added this menu to your favorite!");
        location.replace(location.href);
    }
}

export async function handleRemoveFromFavorite(menuId: string, uid: string) {
    let successful = true;
    const docPath = doc(db, `menus/${menuId}`);

    try {
        // Atomically add a new region to the "regions" array field.
        await updateDoc(docPath, {
            favoritedBy: arrayRemove(uid),
        });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }
    if (successful) {
        alert("You have removed this menu from your favorite!");
        console.log("Successfully removing menu from user's favorite!");
        window.location.replace(location.href);
    }
}