import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIVL9LtKtyq8PYos7QqYssNdrq86alTLs",
    authDomain: "clone-yt-40ac3.firebaseapp.com",
    projectId: "clone-yt-40ac3",
    storageBucket: "clone-yt-40ac3.appspot.com",
    messagingSenderId: "728852198618",
    appId: "1:728852198618:web:d28f6247aa95df479261e3",
    measurementId: "G-CFTS5Y7W0V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };