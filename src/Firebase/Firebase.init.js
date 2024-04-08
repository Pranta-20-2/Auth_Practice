// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCRSekl0n9S_-2WPVYAJi2r1k3BVk5HpI",
    authDomain: "fir-auth-7bce9.firebaseapp.com",
    projectId: "fir-auth-7bce9",
    storageBucket: "fir-auth-7bce9.appspot.com",
    messagingSenderId: "675666347719",
    appId: "1:675666347719:web:3210e4592f59afb0d8a0e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;