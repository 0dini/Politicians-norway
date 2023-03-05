        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyDrr5aYOY9l3MjXAP1VC30sp-Fsv3MLDv0",
        authDomain: "politikere-sandefjord.firebaseapp.com",
        projectId: "politikere-sandefjord",
        storageBucket: "politikere-sandefjord.appspot.com",
        messagingSenderId: "213722503582",
        appId: "1:213722503582:web:6d6dfb4b400cd2982f9e8f",
        measurementId: "G-R12CV9Y85H"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        const db = getFirestore();