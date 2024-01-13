import { db } from "$lib/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export async function handleRate(
    menuId: string,
    uid: string,
    givenRating: number | null,
) {
    if (!givenRating || givenRating < 0 || givenRating > 10) {
        alert("Please input a valid rating from 0 to 10!");
        return;
    }

    const docPath = doc(db, `menus/${menuId}`);
    let docData = {
        [`ratings.${uid}`]: givenRating,
        latestUpdated: serverTimestamp()
    };
    try {
        await updateDoc(docPath, docData);
        console.log("Successfully updating menu's rating in the database!");
        // alert("Your rating has been received!");
    } catch (err) {
        console.error("Error writing to the database:", err);
    }
}
