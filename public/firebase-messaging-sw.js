importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";

// Initialize Firebase app in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyDrxHqeHGC7gKq777j24UhTh870pLRsXR8",
  authDomain: "wave-miniproject.firebaseapp.com",
  projectId: "wave-miniproject",
  storageBucket: "wave-miniproject.appspot.com",
  messagingSenderId: "490374393617",
  appId: "1:490374393617:web:38e13981d78346d7ac26b0",
  measurementId:
    "BCHgGR0weZ4iq8JHpkgFqwsc-9C047OW7ifIWFz5UAB-J173Fd9JrE-SZP0jo-dHu9lPb1Rn17Vy0BEdTEEPPb8",
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

onMessage(messaging, (payload) => {
  console.log("Message received.", payload);
});
// Optional: Customize notification behavior
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  // Customize notification handling here
});
