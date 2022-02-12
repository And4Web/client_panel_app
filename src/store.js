import { createStore, combineReducers, compose } from "redux";
// import firebase from "firebase";
// import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   // createFirestoreInstance // <- needed if using firestore
// };

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
// const firestore = firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
