import { db } from "$lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function handleRate(
    menuId: string,
    uid: string,
    givenRating: number | null,
) {
    let successful = true;

    if (!givenRating || givenRating < 0 || givenRating > 10) {
        alert("Please input a valid rating from 0 to 10!");
        return;
    }

    const docPath = doc(db, `menus/${menuId}`);
    let docData = {
        [`ratings.${uid}`]: givenRating,
    };
    try {
        await updateDoc(docPath, docData);
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }

    if (successful) {
        console.log("Successfully updating menu's rating in the database!");
        alert("Your rating has been received!");
        window.location.replace(location.href);
    }
}