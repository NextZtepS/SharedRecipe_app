import { doc, getDoc } from "firebase/firestore";
import { d as db } from "../../../../../chunks/firebase.js";
const load = async ({ params }) => {
  const menuId = params.menuId;
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
    menu
  };
};
export {
  load
};
