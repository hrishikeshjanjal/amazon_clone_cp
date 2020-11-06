import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMB3CCdOw3_HLyCxYBoB6yOmnaJ_O22DQ",
  authDomain: "clone-cp-3e93c.firebaseapp.com",
  databaseURL: "https://clone-cp-3e93c.firebaseio.com",
  projectId: "clone-cp-3e93c",
  storageBucket: "clone-cp-3e93c.appspot.com",
  messagingSenderId: "295550968506",
  appId: "1:295550968506:web:ebb8ab2a80756b75119883",
  measurementId: "G-5YN7SMBDZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initilize database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
