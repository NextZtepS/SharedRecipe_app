import { db, storage } from "$lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref, listAll, type StorageReference } from "firebase/storage";

async function deleteFolder(ref: StorageReference): Promise<boolean> {
    let successful = true;
    try {
        const result = await listAll(ref);
        for (let folderRef of result.prefixes) {
            try {
                await deleteFolder(folderRef);
            }
            catch {
                successful = false;
            }
        }
        for (let itemRef of result.items) {
            try {
                await deleteObject(itemRef);
            }
            catch {
                successful = false;
            }
        }
    }
    catch {
        successful = false;
    }
    return successful;
}

export async function deleteMenu(menuId: string, uid: string) {
    let successful = true;

    const storageRef = ref(storage, `users/${uid}/menus/${menuId}`)
    try {
        successful = await deleteFolder(storageRef);
    }
    catch (err) {
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