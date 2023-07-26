import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase';

export const load = (async () => {
    const menusQuery = query(
        collection(db, "menus"),
        orderBy("lastestEdited", "desc"),
        limit(24),
    );

    let querySnapshot;
    try {
        console.log("Successfully reading homepage menus from the database!");
        querySnapshot = await getDocs(menusQuery);
    } catch (err) {
        console.error("Error reading from the database:", err);
    }

    let menus: any[] = [];
    querySnapshot?.forEach((doc) => {
        menus = [...menus, doc.data()];
    })
    let lastDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];

    return {
        menus: menus,
        lastDoc: lastDoc
    };
}) satisfies PageLoad;