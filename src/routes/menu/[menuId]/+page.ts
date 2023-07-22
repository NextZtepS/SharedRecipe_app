import { doc, getDoc } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { updateView } from '$lib/database-actions/updateView';

export const load = (async ({ params }) => {
    const menuId = params.menuId;
    
    await updateView(menuId);

    let menu;
    const docPath = doc(db, `menus/${menuId}`);
    const docSnapshot = await getDoc(docPath);
    if (docSnapshot.exists()) {
        menu = docSnapshot.data();
        console.log("Successfully reading menu from the database!");
    } else {
        console.log("No document found!");
    }

    return {
        menu: menu,
    };
}) satisfies PageLoad;