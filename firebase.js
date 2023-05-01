import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemaTwUclH9QVqV5Vvq8RQmAUlAnmFhT8",
  authDomain: "mapboxx-998a5.firebaseapp.com",
  projectId: "mapboxx-998a5",
  storageBucket: "mapboxx-998a5.appspot.com",
  messagingSenderId: "118684115421",
  appId: "1:118684115421:web:60bb516b1b0bfcd5c35634"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
  });
export const db = getFirestore(app);


