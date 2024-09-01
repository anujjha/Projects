import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBYvRUMtxCnLbdFhr30Yg-si9RfVwxwBIE",
  authDomain: "twitter-clone-d1805.firebaseapp.com",
  databaseURL: "https://twitter-clone-d1805.firebaseio.com",
  projectId: "twitter-clone-d1805",
  storageBucket: "twitter-clone-d1805.appspot.com",
  messagingSenderId: "139599593256",
  appId: "1:139599593256:web:ad6ad697cbb1a879629a1d",
  measurementId: "G-5FJQNC3H7Z"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;