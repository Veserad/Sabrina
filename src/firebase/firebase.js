import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChTCU4QZN3m7SRiTsh45UbNVzodSok0lQ",
  authDomain: "sabrina-e5c57.firebaseapp.com",
  projectId: "sabrina-e5c57",
  storageBucket: "sabrina-e5c57.firebasestorage.app",
  messagingSenderId: "935904846254",
  appId: "1:935904846254:web:0cd2d8a4691c2d7316e83f",
  measurementId: "G-GE6LQ6RYGF"
};

firebase.initializeApp(firebaseConfig)

export default firebase