//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBiUV_A7i8VpINHiYUNzdZeGENhh8ZOdPU",
    authDomain: "fir-18d68.firebaseapp.com",
    projectId: "fir-18d68",
    storageBucket: "fir-18d68.appspot.com",
    messagingSenderId: "212536958267",
    appId: "1:212536958267:web:ae37ed910caffff9896b1e",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();