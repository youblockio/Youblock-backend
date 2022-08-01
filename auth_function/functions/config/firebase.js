const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCxjvglT20AVn0QCfmHrpYZ5AYJkYgn1_4",
    authDomain: "dashboard-alpha.firebaseapp.com",
    projectId: "dashboard-alpha",
    storageBucket: "dashboard-alpha.appspot.com",
    messagingSenderId: "227841811755",
    appId: "1:227841811755:web:9e8b93dd1d30b9caf4516e",
    measurementId: "G-L1176LPQ4R"
  };


firebase.initializeApp(firebaseConfig);

module.exports = firebase;