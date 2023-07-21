import { db } from "$lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function handleRate(
    menuId: string,
    uid: string,
    givenRating: number | null,
) {
    let successful = true;
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

    let menu;
    const docSnapshot = await getDoc(docPath);
    if (docSnapshot.exists()) {
        menu = docSnapshot.data();
    } else {
        console.log("No document found!");
    }

    let avgRating: number | null;
    if (menu) {
        const ratings: number[] = Object.values(menu?.ratings);
        let ratingSum = 0;
        for (let rating of ratings) {
            ratingSum += rating;
        }
        avgRating = ratingSum / ratings.length;
    } else {
        avgRating = null;
    }

    try {
        await updateDoc(docPath, {
            avgRating: avgRating,
        });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }
    if (successful) {
        console.log("Successfully updating menu's rating in the database!");
        alert("Your rating has been received!");
        location.replace(location.href);
    }
}