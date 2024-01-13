import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { updateView } from '$lib/database-actions/updateView';
import type { menu } from '$lib/types/menu';
import { doc, getDoc } from 'firebase/firestore';

export const load = (async ({ params }) => {
    const menuId = params.menuId;

    await updateView(menuId);

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
