// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmCYMOpyEicYTrySjzFmKjolU1VT_Y5N4",
    authDomain: "recipe-project-969a4.firebaseapp.com",
    projectId: "recipe-project-969a4",
    storageBucket: "recipe-project-969a4.appspot.com",
    messagingSenderId: "214511376097",
    appId: "1:214511376097:web:531cd02d68b93810c7c9a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//* Custom Store for Authenticated User 
function userStore() {
    let unsubscribe: () => void;

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe
    };
}

export const user = userStore();
