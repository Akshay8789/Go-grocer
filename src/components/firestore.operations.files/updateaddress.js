import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";

async function UpdateUser(uid, newAddress) {
  try {
    const db = getFirestore(app);
    const usersCollection = collection(db, "users");
    const userDocRef = doc(usersCollection, uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const existingUserData = userDocSnapshot.data();
      const updatedAddresses = [...existingUserData.address, newAddress];
      await updateDoc(userDocRef, { address: updatedAddresses });

      console.log("User document updated with new address:", newAddress);
    } else {
      console.log("User document does not exist. Cannot update address.");
    }
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
}

export default UpdateUser;
