import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABYWenw0QHJ7xlbX2njMqJAf2IlvpnKts",
  authDomain: "banking-app-9153b.firebaseapp.com",
  projectId: "banking-app-9153b",
  storageBucket: "banking-app-9153b.appspot.com",
  messagingSenderId: "242095441811",
  appId: "1:242095441811:web:6fb3ec8955a7864480ca66",
};

/** Firebase method */
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
