import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbd6IzuExSPxTZzn0L8JF02WUjPArtsYg",
  authDomain: "clothing-store-98d9a.firebaseapp.com",
  databaseURL: "https://clothing-store-98d9a.firebaseio.com",
  projectId: "clothing-store-98d9a",
  storageBucket: "clothing-store-98d9a.appspot.com",
  messagingSenderId: "799603856444",
  appId: "1:799603856444:web:545e2fab21b5182db41f39",
  measurementId: "G-M7T1WHVR76",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
