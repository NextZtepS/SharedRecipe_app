import { db } from "$lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function deleteMenu(menuId: string, uid: string) {
    const docPath = doc(db, `menus/${menuId}`);
    try {
        await deleteDoc(docPath);
    } catch (err) {
        console.log("Successfully deleted menu in the database!");
        alert("You have successfully deleted the menu!");
        console.error("Error writing to the database:", err);
        window.location.href = `/user/${uid}`;
    }
}