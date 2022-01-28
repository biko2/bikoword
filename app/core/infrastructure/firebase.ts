import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa5Dkx0bh1ncIxr4fFrL3qhCLkMYXPZHY",
  authDomain: "bikoword.firebaseapp.com",
  databaseURL:
    "https://bikoword-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bikoword",
  storageBucket: "bikoword.appspot.com",
  messagingSenderId: "969298549978",
  appId: "1:969298549978:web:51472eeb554b43071699e3",
};

export const app = initializeApp(firebaseConfig);
