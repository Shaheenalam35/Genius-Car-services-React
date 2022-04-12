// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYE_BISdlMd6aKdqa6KVFrz4GA0FRZsZs",
  authDomain: "genius-car-services-c76bf.firebaseapp.com",
  projectId: "genius-car-services-c76bf",
  storageBucket: "genius-car-services-c76bf.appspot.com",
  messagingSenderId: "192833365034",
  appId: "1:192833365034:web:ae6219df485b26a2f50f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
