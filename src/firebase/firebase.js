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


// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });
  
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  
  //   console.log(expenses);
  // });
  
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
  
  
  
  
  
  
  // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();
  
  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React Native, Angular, Python'
  // });
  
  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })
  
  // Setup data sub -> Andrew is a Software Developer at Amazon.
  
  // Change the data and make sure it reprints
  
  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
  
  // database.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });
  
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  
  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });  