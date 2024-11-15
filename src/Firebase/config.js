// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5WIMMFRvc4nSLryRoYG5Vx2LNvK5iu9M",
  authDomain: "demoblog-f40a5.firebaseapp.com",
  projectId: "demoblog-f40a5",
  storageBucket: "demoblog-f40a5.firebasestorage.app",
  messagingSenderId: "270650105740",
  appId: "1:270650105740:web:710b1e1b0eb29a02df40a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bd = getFirestore(app);

export { bd };
