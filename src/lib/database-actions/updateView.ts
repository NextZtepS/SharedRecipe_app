import { db } from "$lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function updateView(menuId: string) {
    const docPath = doc(db, `menus/${menuId}`);

    const docSnapshot = await getDoc(docPath);
    let menu;
    if (docSnapshot.exists()) {
        menu = docSnapshot.data();
    } else {
        console.log("No document found!");
    }

    const oldViews: number = menu?.views;
    const docData = {
        views: +oldViews + 1,
    };
    try {
        await setDoc(docPath, docData, { merge: true });
        console.log("Successfully updating menu's views!");
    } catch (err) {
        console.error("Error writing to the database:", err);
    }
}