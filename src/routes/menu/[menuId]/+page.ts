import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { updateView } from '$lib/database-actions/updateView';
import type { PageLoad } from './$types';

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