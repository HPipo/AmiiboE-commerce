// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2v80z7k7ipTnG9Pk_Ow95hV7pxH3bnSc",
  authDomain: "amiibo-e-shop.firebaseapp.com",
  projectId: "amiibo-e-shop",
  storageBucket: "amiibo-e-shop.appspot.com",
  messagingSenderId: "518363485797",
  appId: "1:518363485797:web:3930c8ccc1cbeb6c92988c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)