import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {};

export const app = firebase.initializeApp(firebaseConfig);
