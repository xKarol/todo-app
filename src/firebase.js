import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB99tGYizTIc6VIeYxcrEqXD_W3kOKmLDA",
  authDomain: "todo-43a78.firebaseapp.com",
  projectId: "todo-43a78",
  storageBucket: "todo-43a78.appspot.com",
  messagingSenderId: "807015424290",
  appId: "1:807015424290:web:e7c1acd48fca1bbc66057b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
