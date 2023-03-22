import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB7xtNiRIcozXVInN-VmfuE0flcR5wiB6w",
    authDomain: "trio-hotel-new.firebaseapp.com",
    projectId: "trio-hotel-new",
    storageBucket: "trio-hotel-new.appspot.com",
    messagingSenderId: "499180632085",
    appId: "1:499180632085:web:f39549828626299418361c",
    measurementId: "G-33VZT14LRT"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const Firebase = firebase.initializeApp(firebaseConfig)

  export { auth, provider, storage};
  export { Firebase, db };