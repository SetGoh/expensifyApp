import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyARxa-x0jvxxzx_vXR1MiOPZQPtmKIm9HU",
    authDomain: "expensify-e1679.firebaseapp.com",
    databaseURL: "https://expensify-e1679.firebaseio.com",
    projectId: "expensify-e1679",
    storageBucket: "expensify-e1679.appspot.com",
    messagingSenderId: "421437736343",
    appId: "1:421437736343:web:b8324b984f9aa42501f0d2",
    measurementId: "G-VP95BHYFVC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };