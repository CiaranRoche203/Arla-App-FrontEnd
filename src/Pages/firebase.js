import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//firebase application
export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCAJ0w2_FhVjCp7zWwZ-tLfz_klqsbucG4",
    authDomain: "arla-application.firebaseapp.com",
    projectId: "arla-application",
    storageBucket: "arla-application.appspot.com",
    messagingSenderId: "780277418310",
    appId: "1:780277418310:web:d2d50983745719359e7d47"
  }).auth();