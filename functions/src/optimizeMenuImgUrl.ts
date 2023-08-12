import { logger } from "firebase-functions/v2";
import { onObjectFinalized } from "firebase-functions/v2/storage";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";

export const optimizeMenuImgUrlFunc = onObjectFinalized(async (event) => {
    const path = event.data.name;
    // const uid = path.split("/")[1];
    const menuId = path.split("/")[3];
    if (path.includes("/images/resized")) {
        let successful = true;
        try {
            const storageRef = getStorage().bucket().file(path);
            const url = await getDownloadURL(storageRef);
            await getFirestore().doc(`menus/${menuId}`).set({ menuImg: url }, { merge: true });
        } catch (err) {
            successful = false;
            logger.error("Error optimizing menu image url:", err);
        }

        if (successful) {
            logger.info(`Successfully optimizing menu image (menuId: ${menuId}) url!"`);
        }
        return null;
    } else {
        return null;
    }
});
