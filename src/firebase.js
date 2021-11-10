import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/filestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBjxZXELl_aktC6weqDquKy4pL4gqx0pyg",
  authDomain: "whatsapp-8c71c.firebaseapp.com",
  projectId: "whatsapp-8c71c",
  storageBucket: "whatsapp-8c71c.appspot.com",
  messagingSenderId: "480472585334",
  appId: "1:480472585334:web:ada888870a03389e61bb57"
};

//const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
    db,
    auth,
    provider,
    storage,
    audioStorage,
    createTimestamp,
    serverTimestamp
}