import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6x9DfUNkfTTsgrOkGUN6JmzApiNwTm3A",
    authDomain: "notesapp-11f31.firebaseapp.com",
    projectId: "notesapp-11f31",
    storageBucket: "notesapp-11f31.appspot.com",
    messagingSenderId: "851564739243",
    appId: "1:851564739243:web:6d228e86895091a7a295ee",
    measurementId: "G-NSN34075JT"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };