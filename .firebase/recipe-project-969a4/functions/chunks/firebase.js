import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { w as writable } from "./index.js";
const firebaseConfig = {
  apiKey: "AIzaSyBmCYMOpyEicYTrySjzFmKjolU1VT_Y5N4",
  authDomain: "recipe-project-969a4.firebaseapp.com",
  projectId: "recipe-project-969a4",
  storageBucket: "recipe-project-969a4.appspot.com",
  messagingSenderId: "214511376097",
  appId: "1:214511376097:web:531cd02d68b93810c7c9a0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
getStorage(app);
function userStore() {
  let unsubscribe;
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const user = userStore();
export {
  auth as a,
  db as d,
  user as u
};
