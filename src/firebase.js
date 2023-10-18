import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,serverTimestamp} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOl2GULttmu2uCMQGlKSpBONEkOmS7Glk",
  authDomain: "yt-clone-27215.firebaseapp.com",
  projectId: "yt-clone-27215",
  storageBucket: "yt-clone-27215.appspot.com",
  messagingSenderId: "724923855077",
  appId: "1:724923855077:web:b98a4b1f33f7579eb5e40c"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
const timeStamp = serverTimestamp()

export {app,db,auth,provider,timeStamp}
