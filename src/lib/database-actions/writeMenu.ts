import { db, storage } from "$lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { handleTagString, reverseTagString } from "./utils/tags";
import { createKeywords } from "./utils/createKeywords";

export async function writeMenu(
    previewURL: string,
    Img: FileList,
    menuName: string,
    menuId: string,
    userName: string,
    uid: string,
    tagString: string,
    about: string,
    ingredients: { [key: number]: string },
    procedures: { [key: number]: string },
    visibility: "public" | "private",
) {
    let successful = true;

    if (!menuName) {
        alert("You must provide a menu name!");
        return;
    } else if (tagString !== reverseTagString(handleTagString(tagString))) {
        alert("You have put in an invalid format for the Tag field!")
        return;
    }

    const storageRef = ref(storage, `users/${uid}/menus/${menuId}/images/menuImg_0.png`);
    let result, url;
    if (Img) {
        try {
            result = await uploadBytes(storageRef, Img[0]);
            url = await getDownloadURL(result.ref);
        } catch (err) {
            successful = false;
            console.error("Error uploading to the storage:", err);
        }
    }

    const docPath = doc(db, `menus/${menuId}`);
    const docData = {
        menuImg: url ?? previewURL,
        menuName: menuName ?? "",
        userName: userName ?? "",
        uid: uid ?? "",
        tags: handleTagString(tagString),
        about: about ?? "",
        ingredients: ingredients ?? {},
        procedures: procedures ?? {},
        latestEdited: serverTimestamp(),
        latestUpdated: serverTimestamp(),
        keywords: createKeywords(
            menuName ?? "",
            userName ?? "",
            handleTagString(tagString)
        ),
        visibility: visibility,
    };

    try {
        await setDoc(docPath, docData, { merge: true });
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }

    if (successful) {
        console.log("Successfully edited menu in the database!");
        alert("You have successfully edited the menu!");
        window.location.href = `/user/${uid}`;
    }
}