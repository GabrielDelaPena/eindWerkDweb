import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgHXK9sLQz-UspDW6MMHnD5hSvSe-RXNA",
  authDomain: "banking-app-e7b55.firebaseapp.com",
  projectId: "banking-app-e7b55",
  storageBucket: "banking-app-e7b55.appspot.com",
  messagingSenderId: "747281561509",
  appId: "1:747281561509:web:725e4828c0d5db49f05a4c",
};

/** Firebase method */
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
