import type { PageLoad } from './$types';
import { auth, db } from '$lib/firebase';
import type { menu } from '$lib/types/menu';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const load = (async () => {
    const menusQuery = query(
        collection(db, "menus"),
        where("visibility", "==", "public"),
        where("favoritedBy", "array-contains", auth.currentUser?.uid)
    );

    let querySnapshot;
    try {
        console.log("Successfully reading user's favorite menus from the database!");
        querySnapshot = await getDocs(menusQuery);
    } catch (err) {
        console.error("Error reading from the database:", err);
    }

    let menus: menu[] = [];
    querySnapshot?.forEach((doc) => {
        menus.push(doc.data() as menu);
    })

    return {
        menus: menus
    };
}) satisfies PageLoad;
