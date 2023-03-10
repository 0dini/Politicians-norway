// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRVwTmf5q-TEbW-mhpCa3Fqyiz-TPf0Lw",
    authDomain: "politikere-norge.firebaseapp.com",
    projectId: "politikere-norge",
    storageBucket: "politikere-norge.appspot.com",
    messagingSenderId: "566036296357",
    appId: "1:566036296357:web:e2162f80b46ed9bb51134c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();