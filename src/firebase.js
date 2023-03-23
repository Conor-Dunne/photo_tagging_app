// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOjoJ0u6Uyiv4NzCXSN9Bx76KpCc84wyQ",
  authDomain: "photo-tagging-app-2905f.firebaseapp.com",
  projectId: "photo-tagging-app-2905f",
  storageBucket: "photo-tagging-app-2905f.appspot.com",
  messagingSenderId: "75966258001",
  appId: "1:75966258001:web:34ca700b9f4cf9317f1170",
  measurementId: "G-8ZKY124E12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
