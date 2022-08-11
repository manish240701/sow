//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Create a root reference

const firebaseConfig = {
    apiKey: "AIzaSyA1Tvjeki30_XnJWvdRsHWZYL1Z69WGzpA",
    authDomain: "sowbarnika-fb0c6.firebaseapp.com",
    projectId: "sowbarnika-fb0c6",
    storageBucket: "sowbarnika-fb0c6.appspot.com",
    messagingSenderId: "649182813071",
    appId: "1:649182813071:web:3b8fe40e325fdaa6e709fa"
  };

//exports

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();

export { storage };
