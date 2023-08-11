// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    // your app configuration
    //...
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); //? Firebase Analytics doesn't support NodeJS environment
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Custom Store for Authenticated User 
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
