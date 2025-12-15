// firebase.js (FOR PLAIN HTML)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8Cym5VZDWrXTp5EFvjNzyMLze_rmihnQ",
  authDomain: "navig-d38d1.firebaseapp.com",
  projectId: "navig-d38d1",
  storageBucket: "navig-d38d1.firebasestorage.app",
  messagingSenderId: "677570078984",
  appId: "1:677570078984:web:ab8374781bca644c4624bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORT AUTH (THIS WAS MISSING)
export const auth = getAuth(app);
