import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBHncyCCHFPpGLrbHDnvuWu5UU3faFLszA",
  authDomain: "crwn-db-9b449.firebaseapp.com",
  projectId: "crwn-db-9b449",
  storageBucket: "crwn-db-9b449.appspot.com",
  messagingSenderId: "140602228660",
  appId: "1:140602228660:web:0e508364888a816d9efce1",
  measurementId: "G-35GB165SCD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
