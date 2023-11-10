import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIjr_JAUUgG5136JpaXs3-TrO68RPnj2A",
  authDomain: "demoreactnativefirebase-dbd04.firebaseapp.com",
  databaseURL: "https://demoreactnativefirebase-dbd04-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoreactnativefirebase-dbd04",
  storageBucket: "demoreactnativefirebase-dbd04.appspot.com",
  messagingSenderId: "740670493759",
  appId: "1:740670493759:web:7bddd693077458d694d48a",
  measurementId: "G-T00T6W0985"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };