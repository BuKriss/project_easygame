import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASSE_API_KEY,
    authDomain: "easygame-8a3c6.firebaseapp.com",
    databaseURL: "https://easygame-8a3c6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "easygame-8a3c6",
    storageBucket: "easygame-8a3c6.appspot.com",
    messagingSenderId: "316067950519",
    appId: "1:316067950519:web:b35f278dcbbe3f23b6c232"
  };

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);