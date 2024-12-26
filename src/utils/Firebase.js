//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RB-V54CL23xA0_vX_xLVyHTYpUbZT20",
  authDomain: "movie-gpt-a139b.firebaseapp.com",
  projectId: "movie-gpt-a139b",
  storageBucket: "movie-gpt-a139b.firebasestorage.app",
  messagingSenderId: "281944629828",
  appId: "1:281944629828:web:2750aeeea2681c6095d211",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
