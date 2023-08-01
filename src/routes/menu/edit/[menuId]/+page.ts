import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import type { PageLoad } from './$types';
import type { menu } from '$lib/interfaces/menu';

export const load = (async ({ params }) => {
    const menuId = params.menuId;
    let menu: menu | undefined;

    const docPath = doc(db, `menus/${menuId}`);
    const docSnapshot = await getDoc(docPath);
    if (docSnapshot.exists()) {
        menu = docSnapshot.data() as menu;
        console.log("Successfully reading menu from the database!");
    } else {
        console.log("No document found!");
    }

    return {
        menu: menu,
    };
}) satisfies PageLoad;