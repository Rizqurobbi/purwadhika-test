import firebase from "firebase/app";
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// import  "firebase/firestore"
// const clientCredentials = {
//     apiKey: process.env.NEXT_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };
// export default function initFirebase() {
//     if (!firebase.apps.length){
//         firebase.initializeApp(clientCredentials)
//     }
//     console.log("HAlo")
// }
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// let app;
// if (getApps().length === 0) {
//     app = initializeApp(firebaseConfig)
//     console.log("FIREBASE")
// }

// export default function initFirebase(){
//     if(getApps().length === 0){
//         initializeApp(firebaseConfig)
//         console.log("ANAK ANJ")
//     }
// }

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// export default db