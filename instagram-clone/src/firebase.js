import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn3kIrizhh_hgWPBYIewaZgDY-lIBp6jY",
  authDomain: "instagram-clone-e43dd.firebaseapp.com",
  projectId: "instagram-clone-e43dd",
  storageBucket: "instagram-clone-e43dd.appspot.com",
  messagingSenderId: "330461964740",
  appId: "1:330461964740:web:cf1d46d7f614dfb8e85c91",
  measurementId: "G-ZC05NJLJF6",
};
// databaseURL: "https://instagram-clone-e43dd.firebaseio.com",

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };
