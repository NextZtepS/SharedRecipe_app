import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";
import { d as db } from "../../chunks/firebase.js";
const load = async () => {
  const menusQuery = query(
    collection(db, "menus"),
    orderBy("lastestEdited", "desc"),
    limit(24)
  );
  let querySnapshot;
  try {
    console.log("Successfully reading homepage menus from the database!");
    querySnapshot = await getDocs(menusQuery);
  } catch (err) {
    console.error("Error reading from the database:", err);
  }
  let menus = [];
  querySnapshot?.forEach((doc) => {
    menus = [...menus, doc.data()];
  });
  let lastDoc = querySnapshot?.docs[querySnapshot?.docs.length - 1];
  return {
    menus,
    lastDoc
  };
};
export {
  load
};
