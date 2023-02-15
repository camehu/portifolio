// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/getFirestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKwMQ7EsVNPkpX1J6ghemb-Om-pcuPnyA",
  authDomain: "portifolio-92314.firebaseapp.com",
  projectId: "portifolio-92314",
  storageBucket: "portifolio-92314.appspot.com",
  messagingSenderId: "456027782632",
  appId: "1:456027782632:web:817525effd7e4e80feb85d",
  measurementId: "G-516TYP9DN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const DBportifolio = getFirestore(app);
export {DBportifolio}