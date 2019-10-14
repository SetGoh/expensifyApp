import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
//import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
//import 'firebase/functions';   // for cloud functions

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

database.ref().set({
    name: 'Georg Augusto',
    age: 27,
    isSingle: true,
    location: {
        city: 'Assis',
        country: 'Brasil'
    }
});