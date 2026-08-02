import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";

async function UpdateUser(uid, name, phonenumber) {
  try {
    const db = getFirestore(app);
    const usersCollection = collection(db, "users");
    const userDocRef = doc(usersCollection, uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const updatedUserData = {
        ...userDocSnapshot.data(),
        name: name,
        phonenumber: phonenumber,
      };

      await updateDoc(userDocRef, updatedUserData);
      console.log("User document updated:", updatedUserData);
    } else {
      console.log("User document does not exist. Cannot update.");
    }
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
}

export default UpdateUser;
