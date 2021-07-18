
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCo8pgG2lZcNRZ6uZv8_LQMHz_mZszf44Q",
    authDomain: "image-gallery-3e1ca.firebaseapp.com",
    projectId: "image-gallery-3e1ca",
    storageBucket: "image-gallery-3e1ca.appspot.com",
    messagingSenderId: "694653096161",
    appId: "1:694653096161:web:baa28b4050cc8587e2e7a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };