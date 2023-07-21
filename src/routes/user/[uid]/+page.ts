import { collection, getDocs, query, where } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase';

export const load = (async ({ params }) => {
    const uid = params.uid;

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

    let menus: any[] = [];
    querySnapshot?.forEach((doc) => {
        menus.push(doc.data());
    })

    return {
        uid: uid,
        menus: menus
    };
}) satisfies PageLoad;