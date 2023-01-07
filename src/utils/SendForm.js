import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../assets/firebaseConfig';

export async function saveMessage(obj) {
    try {
        const docRef = await addDoc(collection(getFirestore(firebaseApp), 'challenge_greydive'), obj)
        return "Document written with ID: " + docRef.id;
    }
    catch (error) {
        return alert('Error writing new message to Firebase Database' +  error);
    }
}