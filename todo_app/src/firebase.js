import firebase from './firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtlBu7jU1nASSFD4mXJitApm2loh8rGoI",
  authDomain: "todo-app-7ff32.firebaseapp.com",
  projectId: "todo-app-7ff32",
  storageBucket: "todo-app-7ff32.appspot.com",
  messagingSenderId: "916181190679",
  appId: "1:916181190679:web:5d2e43420da31176d9b452",
  measurementId: "G-EQDNE3NKCH"
});

const db = firebaseApp.firestore();


export default db;

