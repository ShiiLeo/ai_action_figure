// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9Kx92aXxkOUzibEznIVFZGkJavF5CW7c",
  authDomain: "ai-imgs.firebaseapp.com",
  projectId: "ai-imgs",
  storageBucket: "ai-imgs.appspot.com", // 修正域名
  messagingSenderId: "112804224675",
  appId: "1:112804224675:web:f65844ff2da2089ca82916",
  measurementId: "G-FZS7QJP4VM"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, analytics };
