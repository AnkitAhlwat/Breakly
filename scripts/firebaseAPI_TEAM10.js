//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB-oZX-IUAbfgMGGXuAg06brQvXeeB2gqU",
    authDomain: "dtc10-8e7cd.firebaseapp.com",
    projectId: "dtc10-8e7cd",
    storageBucket: "dtc10-8e7cd.appspot.com",
    messagingSenderId: "658558343763",
    appId: "1:658558343763:web:259895559f0c51179084a6",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
