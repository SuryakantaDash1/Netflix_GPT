
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrQOgt1B1JiygoZnbdMvPjL0rDINjPgf8",
  authDomain: "netflixgpt-133a2.firebaseapp.com",
  projectId: "netflixgpt-133a2",
  storageBucket: "netflixgpt-133a2.appspot.com",
  messagingSenderId: "599423491079",
  appId: "1:599423491079:web:0133ce2aea70eb96645ea2",
  measurementId: "G-QMBEF89YXZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);