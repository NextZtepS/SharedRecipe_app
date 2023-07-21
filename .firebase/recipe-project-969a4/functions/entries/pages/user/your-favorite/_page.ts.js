import { d as db, a as auth } from "../../../../chunks/firebase.js";
import { query, collection, where, getDocs } from "firebase/firestore";
const load = async () => {
  const menusQuery = query(
    collection(db, "menus"),
    where("favoritedBy", "array-contains", auth.currentUser?.uid)
  );
  let querySnapshot;
  try {
    console.log("Successfully reading user's favorite menus from the database!");
    querySnapshot = await getDocs(menusQuery);
  } catch (err) {
    console.error("Error reading from the database:", err);
  }
  let menus = [];
  querySnapshot?.forEach((doc) => {
    menus.push(doc.data());
  });
  return {
    menus
  };
};
export {
  load
};
