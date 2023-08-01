import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '$lib/firebase';
import type { PageLoad } from './$types';
import type { user } from '$lib/model/user';
import type { menu } from '$lib/model/menu';

export const load = (async ({ params }) => {
    const uid = params.uid;

    const docPath = doc(db, `users/${uid}`);
    const docSnapshot = await getDoc(docPath);

    let author: user | undefined;
    if (docSnapshot.exists()) {
        author = docSnapshot.data() as user;
        console.log("Successfully reading author from the database!");
    } else {
        console.log("No author found!");
    }

    const menusQuery = query(
        collection(db, "menus"),
        where("uid", "==", uid)
    );

    let querySnapshot;
    try {
        console.log("Successfully reading the user's menus from the database!");
        querySnapshot = await getDocs(menusQuery);
    } catch (err) {
        console.error("Error reading from the database:", err);
    }

    let menus: menu[] = [];
    querySnapshot?.forEach((doc) => {
        menus.push(doc.data() as menu);
    })

    return {
        author: author,
        menus: menus
    };
}) satisfies PageLoad;