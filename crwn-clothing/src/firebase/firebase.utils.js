import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBHncyCCHFPpGLrbHDnvuWu5UU3faFLszA",
  authDomain: "crwn-db-9b449.firebaseapp.com",
  projectId: "crwn-db-9b449",
  storageBucket: "crwn-db-9b449.appspot.com",
  messagingSenderId: "140602228660",
  appId: "1:140602228660:web:0e508364888a816d9efce1",
  measurementId: "G-35GB165SCD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
