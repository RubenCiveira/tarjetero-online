// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Injectable } from "@angular/core";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1jldKoEsWo8JRXVFutBhs3AHFWl0O2rg",
  authDomain: "tarjetero-online.firebaseapp.com",
  projectId: "tarjetero-online",
  storageBucket: "tarjetero-online.appspot.com",
  messagingSenderId: "762132096333",
  appId: "1:762132096333:web:7af83dac5fbd8426f0c304",
  measurementId: "G-PGJK6W0C4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Injectable({ providedIn: 'root' })
export class FirebaseService {

}