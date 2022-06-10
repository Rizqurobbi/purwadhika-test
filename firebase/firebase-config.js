import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDwNHr6sHcQHZIsJOwZqR3nay29AtxwZ6U",
    authDomain: "purwadhika-test.firebaseapp.com",
    projectId: "purwadhika-test",
    storageBucket: "purwadhika-test.appspot.com",
    messagingSenderId: "438932591300",
    appId: "1:438932591300:web:1a52101ebe0217cdf06f91",
    measurementId: "G-PER9WDD5R8"
});

export const database = getFirestore(firebaseConfig);