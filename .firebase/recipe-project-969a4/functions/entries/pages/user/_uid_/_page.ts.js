import { query, collection, where, getDocs } from "firebase/firestore";
import { d as db } from "../../../../chunks/firebase.js";
const load = async ({ params }) => {
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
  let menus = [];
  querySnapshot?.forEach((doc) => {
    menus.push(doc.data());
  });
  return {
    uid,
    menus
  };
};
export {
  load
};
