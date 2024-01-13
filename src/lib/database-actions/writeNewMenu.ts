import { db, storage } from "$lib/firebase";
import { DocumentReference, addDoc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { handleTagString, reverseTagString } from "./utils/tags";
import { createKeywords } from "./utils/createKeywords";

export async function writeNewMenu(
    Img: FileList,
    menuName: string,
    userName: string,
    uid: string,
    tagString: string,
    about: string,
    ingredients: { [key: number]: string },
    procedures: { [key: number]: string },
    references: string,
    visibility: "public" | "private"
) {
    let successful = true;

    if (!menuName) {
        alert("You must provide a menu name!");
        return;
    } else if (tagString != reverseTagString(handleTagString(tagString))) {
        alert("You have put in an invalid format for the Tag field!")
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
        procedures: procedures ?? {},
        latestEdited: serverTimestamp(),
        latestUpdated: serverTimestamp(),
        avgRating: null,
        ratings: {},
        views: 0,
        favoritedBy: [],
        keywords: createKeywords(
            menuName ?? "",
            userName ?? "",
            handleTagString(tagString)
        ),
        references: references ?? "",
        visibility: visibility,
    };
    
    let docRef: DocumentReference | null = null;
    try {
        docRef = await addDoc(colPath, docData);
    } catch (err) {
        successful = false;
        console.error("Error writing to the database:", err);
    }

    if (docRef) {
        const menuId = docRef.id;
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

        try {
            const additionalData = {
                menuId: menuId,
                menuImg: url ?? null,
            };
            await setDoc(docRef, additionalData, { merge: true });
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
