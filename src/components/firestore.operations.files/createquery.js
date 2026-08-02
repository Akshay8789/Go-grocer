import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";

async function CreateQuery(userid, userEmail, query) {
  try {
    const db = getFirestore(app);
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const queriesCollection = collection(db, "queries");
    const dateDocRef = doc(queriesCollection, formattedDate);
    const dateDocSnapshot = await getDoc(dateDocRef);

    if (!dateDocSnapshot.exists()) {
      const initialData = {
        queries: [
          {
            uid: userid,
            email: userEmail,
            query: query,
            timestamp: currentDate,
          },
        ],
      };

      await setDoc(dateDocRef, initialData);
      console.log("Date document created:", initialData);
    } else {
      const updatedData = {
        queries: arrayUnion({
          uid: userid,
          email: userEmail,
          query: query,
          timestamp: currentDate,
        }),
      };

      await updateDoc(dateDocRef, updatedData);
      console.log("Date document updated:", updatedData);
    }
  } catch (error) {
    console.error("Error updating date document:", error);
    throw error;
  }
}

export default CreateQuery;
