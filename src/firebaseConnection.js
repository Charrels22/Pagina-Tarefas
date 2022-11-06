import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBCFrkn2Jl7Lah6z6tw1RiOUVVDqFJP2OE",
    authDomain: "reactjs-udemy-85e6d.firebaseapp.com",
    projectId: "reactjs-udemy-85e6d",
    storageBucket: "reactjs-udemy-85e6d.appspot.com",
    messagingSenderId: "560743902175",
    appId: "1:560743902175:web:5f7f80601e9b32398eb26a",
    measurementId: "G-HSKZPKW5PL"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };