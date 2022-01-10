// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo151D8ivCJhh3MN4LW62O7vFFNm6XW5o",
  authDomain: "bitians-web.firebaseapp.com",
  projectId: "bitians-web",
  storageBucket: "bitians-web.appspot.com",
  messagingSenderId: "864068318387",
  appId: "1:864068318387:web:4414fa61d058ff2271acc6",
  measurementId: "G-7DZ2MGTT6B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;