// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCx3GHgPmNizrFlF70XwwnioZIzfFQw-i0",
  authDomain: "webapp-25003.firebaseapp.com",
  projectId: "webapp-25003",
  storageBucket: "webapp-25003.appspot.com",
  messagingSenderId: "819955140218",
  appId: "1:819955140218:web:6c824af41860528ed91dc3",
  measurementId: "G-J0QQVPCMRW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };