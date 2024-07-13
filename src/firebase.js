// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyDs84jDOcS0RCp06hKh02PeMD80xY1yKI8",
    authDomain: "vehiclepriceprediction.firebaseapp.com",
    projectId: "vehiclepriceprediction",
    storageBucket: "vehiclepriceprediction.appspot.com",
    messagingSenderId: "925054503215",
    appId: "1:925054503215:web:ecb3fa71882e62093c79da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };









//////...................//////////////////////////////////////


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);