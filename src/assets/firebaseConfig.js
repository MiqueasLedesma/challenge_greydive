import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import env from 'react-dotenv';

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESAGGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} = env;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESAGGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = collection(getFirestore(firebaseApp), 'challenge_greydive');
