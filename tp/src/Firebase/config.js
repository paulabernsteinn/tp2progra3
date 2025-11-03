import app from 'firebase/app';
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDIdt39mhhGVYCiO05YsbXHrsAa0bcut9Y",
    authDomain: "tp2progra3.firebaseapp.com",
    projectId: "tp2progra3",
    storageBucket: "tp2progra3.firebasestorage.app",
    messagingSenderId: "76667898503",
    appId: "1:76667898503:web:f187d0c4fc85d98ade4622",
    measurementId: "G-BFQL29JM85"
  };

  app.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const storage = app.storage();
  export const db = app.firestore();