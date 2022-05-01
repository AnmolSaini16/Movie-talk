import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBx0mUei98O_s9M8RbJFs0kDyMQSrfIYDo",
    authDomain: "movie-reviews-6406f.firebaseapp.com",
    projectId: "movie-reviews-6406f",
    storageBucket: "movie-reviews-6406f.appspot.com",
    messagingSenderId: "907834500453",
    appId: "1:907834500453:web:cad2d2a9d313f28f752d8c",
    measurementId: "G-EQZT8WXLTJ"
  };


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth };
  