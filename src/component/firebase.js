import firebase from 'firebase'
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBqvhGnPck10VdNKdLIErr61UBqzb5lc5Q",
  authDomain: "clone-ebd63.firebaseapp.com",
  databaseURL: "https://clone-ebd63.firebaseio.com",
  projectId: "clone-ebd63",
  storageBucket: "clone-ebd63.appspot.com",
  messagingSenderId: "1077083796938",
  appId: "1:1077083796938:web:8e67fd9e9cb75be9648b33",
  measurementId: "G-CKP0G9L55T"
});
const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}