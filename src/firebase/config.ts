import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6zCZ0dNVczc7vq4i265ZvHx-N5CF-YTI",
  authDomain: "spravakmene.firebaseapp.com",
  projectId: "spravakmene",
  storageBucket: "spravakmene.appspot.com",
  messagingSenderId: "998693040513",
  appId: "1:998693040513:web:e3f491989bb199fca07880"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


// počáteční initilizace služeb
const projectFirestore = firebase.firestore();


export { projectFirestore }