import { addDoc } from 'firebase/firestore';
import { db } from '../assets/firebaseConfig';

export async function saveMessage(obj) {
    try {
        const docRef = await addDoc(db, obj)
        console.log(docRef);
        return docRef.id;
    }
    catch (error) {
        return alert('Error writing new message to Firebase Database' +  error);
    }
}