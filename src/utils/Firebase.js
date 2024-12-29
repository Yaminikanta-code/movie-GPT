//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

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

class AuthService {
  constructor() {
    this.auth = getAuth();
  }

  async signUp(email, password, name) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLYDjmdFOye9Grb9MizY3-hNhvmdHjtTzKVTabbNglAhlQrmffNPVfORCi6pOcl6ureU&usqp=CAU",
      });

      return null; // Indicate success
    } catch (error) {
      const errorCode = error.code || "unknown-error";
      const errorMessage = error.message || "An unknown error occurred";
      return { errorCode, errorMessage };
    }
  }

  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;
      return null; // Indicate success
    } catch (error) {
      const errorCode = error.code || "unknown-error";
      const errorMessage = error.message || "An unknown error occurred";
      return { errorCode, errorMessage };
    }
  }

  async signOutUser() {
    try {
      await signOut(this.auth);
      return null; // Indicate success
    } catch (error) {
      const errorCode = error.code || "unknown-error";
      const errorMessage = error.message || "An unknown error occurred";
      return { errorCode, errorMessage };
    }
  }
}

const authService = new AuthService();

export default authService;
