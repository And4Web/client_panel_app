import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyBOMveWrNYrIOP9_dXvEUx6u3vwCx15T4w",
  authDomain: "clientpannelapp-357a6.firebaseapp.com",
  projectId: "clientpannelapp-357a6",
  storageBucket: "clientpannelapp-357a6.appspot.com",
  messagingSenderId: "921521652157",
  appId: "1:921521652157:web:7bc3d3b585f80cc2e752d4",
  measurementId: "G-NECV84QJ1V",
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
const firestore = firebase.firestore();

