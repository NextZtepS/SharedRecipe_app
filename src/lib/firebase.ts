// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCIy8E1dPDKIoJojTlmfMj5A5X-dLfDyU8",
    authDomain: "shared-recipe.firebaseapp.com",
    projectId: "shared-recipe",
    storageBucket: "shared-recipe.appspot.com",
    messagingSenderId: "592985192315",
    appId: "1:592985192315:web:670e12f4bd230f01ebafde",
    measurementId: "G-WZR4VRD285"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
//TODO: const analytics = getAnalytics(app);

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
