import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtJ6a6ZphT-xmqTMTjftrJTzj3-OY9m90",
  authDomain: "notes-5b2cc.firebaseapp.com",
  projectId: "notes-5b2cc",
  storageBucket: "notes-5b2cc.appspot.com",
  messagingSenderId: "602950783361",
  appId: "1:602950783361:web:ba4b1432a9615cf02e9880"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };