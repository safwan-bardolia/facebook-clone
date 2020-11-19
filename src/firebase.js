import firebase from "firebase";


//go to firebase current project setting, click on 'config' in "firebase sdk snippet",
//now copy the code & create 'firebase.js' file & paste inside it (i.e below object)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKqMFoUyYRmX5YRs7lEyGvPcjq643hoVE",
  authDomain: "facebook-clone-63cb8.firebaseapp.com",
  databaseURL: "https://facebook-clone-63cb8.firebaseio.com",
  projectId: "facebook-clone-63cb8",
  storageBucket: "facebook-clone-63cb8.appspot.com",
  messagingSenderId: "417090117297",
  appId: "1:417090117297:web:5b9cb740433ff6f67e0c90",
  measurementId: "G-6WM01P7TWM",
};

// connect our React app with firebase (i.e connecting frontend with backend)
const firebaseApp = firebase.initializeApp(firebaseConfig)  // initialize app with firebase config

// get access to the Database (1st create DB inside firebase current project setting)
const db = firebaseApp.firestore();

// setting up firebase authentication
const auth = firebase.auth();           // for signin/signout functionality

// to tell firebase that we need google login service  (1st enable Google sign in functionality inside Authentication)
const provider = new firebase.auth.GoogleAuthProvider();

// for using outside of this file
export {auth,provider};
export default db;