// See a full list of supported triggers at 
// https://firebase.google.com/docs/functions

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import { logger, storage } from "firebase-functions"
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage, getDownloadURL } from "firebase-admin/storage";

initializeApp();

export const optimizeMenuImgUrl = storage.object().onFinalize(async (event) => {
    const path = event.name;
    const menuId = path?.split("/")[1];
    if (path?.includes("/images/resized")) {
        let successful = true;
        try {
            const storageRef = getStorage().bucket().file(path);
            const url = await getDownloadURL(storageRef);
            await getFirestore().doc(`menus/${menuId}`).update({ menuImg: url });
        } catch (err) {
            successful = false;
            logger.error("Error optimizing menu image url:", err);
        }

        if (successful) {
            logger.log("Successfully optimizing menu image url!");
        }
        return null;
    } else {
        return null;
    }
});