// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeBvQC6qiIiXoHfZceo9J5TFcPFo9nn9Y",
  authDomain: "gogrocers-2024.firebaseapp.com",
  projectId: "gogrocers-2024",
  storageBucket: "gogrocers-2024.appspot.com",
  messagingSenderId: "63256488612",
  appId: "1:63256488612:web:3dd95ca4c8e24fd26a9431",
  measurementId: "G-M84SBN7DJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };