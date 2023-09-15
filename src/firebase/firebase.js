
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoskCMDLEkm0IoFa-y2YsypDm2ttCPScE",
  authDomain: "movie-9d782.firebaseapp.com",
  projectId: "movie-9d782",
  storageBucket: "movie-9d782.appspot.com",
  messagingSenderId: "957471534010",
  appId: "1:957471534010:web:0ed43f528a85560ac64b83"
};
const app= initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const moviesRef= collection(db,"movies")
export const reviewsRef= collection(db,"reviews");
export const usersRef =collection(db,"users")

export default app;