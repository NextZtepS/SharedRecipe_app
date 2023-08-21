import { logger } from "firebase-functions/v2";
import { onDocumentUpdated } from "firebase-functions/v2/firestore";
import { getFirestore } from "firebase-admin/firestore";

export const updateAvgRatingFunc = onDocumentUpdated("menus/{menuId}", async (event) => {
    const menuId = event.params.menuId;
    const previousDocument = event.data?.before.data();
    const newDocument = event.data?.after.data();

    const previousRatings = previousDocument?.ratings;
    const newRatings = newDocument?.ratings;
    if (!areEquivalentObject(previousRatings, newRatings)) {
        const ratings: number[] = Object.values(newRatings);
        const ratingSum = ratings.reduce((partialSum, rating) => partialSum + rating, 0);
        const avgRating = ratingSum / ratings.length;
        try {
            await getFirestore().doc(`menus/${menuId}`).set({ avgRating: avgRating }, { merge: true });
            logger.info(`Successfully updating menu (menuId: ${menuId}) avgRating to ${avgRating}!`);
        } catch (err) {
            logger.error("Error updating menu avgRating:", err);
        }
        return null;
    } else {
        return null;
    }
});

function areEquivalentObject(object1: any, object2: any): boolean {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
