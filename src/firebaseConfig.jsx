// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcMYZYTKnIxuL-IKDXckyEgrV071kDM8I",
  authDomain: "linkedin-clone-9ba93.firebaseapp.com",
  projectId: "linkedin-clone-9ba93",
  storageBucket: "linkedin-clone-9ba93.appspot.com",
  messagingSenderId: "622466887362",
  appId: "1:622466887362:web:3f6598a3240c46d863155b",
  measurementId: "G-HGM57KSQ10"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);