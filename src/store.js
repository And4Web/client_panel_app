import { createStore, combineReducers, compose } from "redux";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { createFirestoreInstance } from "redux-firestore";

import "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOMveWrNYrIOP9_dXvEUx6u3vwCx15T4w",
  authDomain: "clientpannelapp-357a6.firebaseapp.com",
  projectId: "clientpannelapp-357a6",
  storageBucket: "clientpannelapp-357a6.appspot.com",
  messagingSenderId: "921521652157",
  appId: "1:921521652157:web:7bc3d3b585f80cc2e752d4",
  measurementId: "G-NECV84QJ1V",
};

//react-redux-firestore Config Options
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, //Firestore for profile instead of real time db
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
// const firestore = firebase.firestore();

// add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rrfConfig) // firebase instance as first argument, rrfConfig as optional second
)(createStore);

// Add Firebase to reducers
const rootReducer = combineReducers({
  firestore: firestoreReducer,
});

// Create store with reducers and initial state
const initialState = {};

export const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reduxFirestore(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// export store;
