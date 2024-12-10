// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDikmmlOQ1E5mbXv0SluB4JlmLXatbHsQ",
  authDomain: "gym-schedule-4f603.firebaseapp.com",
  projectId: "gym-schedule-4f603",
  storageBucket: "gym-schedule-4f603.firebasestorage.app",
  messagingSenderId: "202049489218",
  appId: "1:202049489218:web:90b5a28b032e916c45e0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth