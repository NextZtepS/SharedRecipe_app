import { db, storage } from "$lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export async function deleteMenu(menuId: string, uid: string) {
    let successful = true;

    const storageRef = ref(storage, `menus/${menuId}/images/menuImg_400x300.png`)
    try {
        await deleteObject(storageRef);
    } catch (err) {
        successful = false;
        console.error("Error deleting from the storage:", err);
    }

    const docPath = doc(db, `menus/${menuId}`);
    try {
        await deleteDoc(docPath);
    } catch (err) {
        successful = false;
        console.error("Error deleting from the database:", err);
    }

    if (successful) {
        console.log("Successfully deleted menu from the database!");
        alert("You have successfully deleted the menu!");
        window.location.href = `/user/${uid}`;
    }
}