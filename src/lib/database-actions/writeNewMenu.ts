import { db, storage } from "$lib/firebase";
import { addDoc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { handleTagString } from "../utils/tags";
import { createKeywords } from "../utils/createKeywords";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function writeNewMenu(
    Img: FileList,
    menuName: string,
    userName: string,
    uid: string,
    tagString: string,
    about: string,
    ingredients: { [key: number]: string },
    precedures: { [key: number]: string },
) {

    let successful = true;
    if (!menuName) {
        alert("You must provide a menu name!");
        return;
    }

    const colPath = collection(db, "menus");
    const docData = {
        menuImg: null,
        menuName: menuName ?? "",
        userName: userName ?? "",
        uid: uid ?? "",
        tags: handleTagString(tagString),
        about: about ?? "",
        ingredients: ingredients ?? {},
        precedures: precedures ?? {},
        lastestEdited: serverTimestamp(),
        avgRating: null,
        ratings: {},
        views: 0,
        favoritedBy: [],
        keywords: createKeywords(
            menuName ?? "",
            userName ?? "",
            handleTagString(tagString)
        ),
    };

    let docRef;
    try {
        docRef = await addDoc(colPath, docData);
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }

    if (docRef) {
        const storageRef = ref(storage, `menus/${docRef.id}/menuImg.png`);
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

        try {
            const addtionalData = {
                menuId: docRef.id,
                menuImg: url ?? null,
            };
            await setDoc(docRef, addtionalData, { merge: true });
        } catch (err) {
            successful = false;
            console.error("Error writing to the database:", err);
        }
    }
    if (successful) {
        console.log("Successfully added new menu to the database!");
        alert("You have successfully created a new menu!");
        window.location.href = `/user/${uid}`;
    }
}