import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);