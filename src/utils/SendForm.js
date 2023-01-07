import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../assets/firebaseConfig';

export async function saveMessage(obj) {
    try {
        await addDoc(collection(getFirestore(firebaseApp), 'challenge_greydive'), obj);
    }
    catch (error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}