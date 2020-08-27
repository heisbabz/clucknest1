import firebase, { firestore } from 'firebase'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCCJNF2fdwnT4lIPeaVAuNs-sYuB1RHZDY",
    authDomain: "clucknest.firebaseapp.com",
    databaseURL: "https://clucknest.firebaseio.com",
    projectId: "clucknest",
    storageBucket: "clucknest.appspot.com",
    messagingSenderId: "1076141999615",
    appId: "1:1076141999615:web:91362257d98ea6931a93ca",
    measurementId: "G-XE4S14204T"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
  firestore

  export default firebaseApp.firestore()