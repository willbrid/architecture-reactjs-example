import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCc12JZO0lcbTnsqnTYvLpuhMDNu_fpZ0E",
    authDomain: "firestore-test-553de.firebaseapp.com",
    databaseURL: "https://firestore-test-553de.firebaseio.com",
    projectId: "firestore-test-553de",
    storageBucket: "firestore-test-553de.appspot.com",
    messagingSenderId: "893177151432",
    appId: "1:893177151432:web:d105bcded7a2f793ce0afd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;