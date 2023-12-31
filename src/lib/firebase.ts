// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions"
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCIy8E1dPDKIoJojTlmfMj5A5X-dLfDyU8",
    authDomain: "shared-recipe.firebaseapp.com",
    projectId: "shared-recipe",
    storageBucket: "shared-recipe.appspot.com",
    messagingSenderId: "592985192315",
    appId: "1:592985192315:web:14b9325eb5f5a244ebafde",
    measurementId: "G-MSSHMZPMBZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export function prepareFirebase() {
    if (!window.location.href.includes("localhost")) {
        const analytics = getAnalytics(app);
        const appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider("6LfRcSooAAAAAD6wB0T2NYzkskW0FkG5s125rT5p"),
            isTokenAutoRefreshEnabled: true
        });
    }
}

//* please select the appropriate mode before running the application
const usingEmulators = false;
if (usingEmulators) {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
    connectStorageEmulator(storage, "127.0.0.1", 9199);
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
