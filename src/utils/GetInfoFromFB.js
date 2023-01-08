import { doc, getDoc } from "firebase/firestore";
import { db } from "../assets/firebaseConfig";

export const getInfoFromFB = async (query) => {
    const docRef = doc(db,query);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    } else {
      return "!document"
    }
}
