import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { db } from '$lib/firebase';
import type { PageLoad } from './$types';
import type { menu } from '$lib/interfaces/menu';

export const load = (async () => {
    const menusQuery = query(
        collection(db, "menus"),
        where("visibility", "==", "public"),
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

    let menus: menu[] = [];
    querySnapshot?.forEach((doc) => {
        menus = [...menus, doc.data() as menu];
    })
    let lastDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];

    return {
        menus: menus,
        lastDoc: lastDoc
    };
}) satisfies PageLoad;