import {
    getFirestore,
    collection,
    doc,
    getDoc,
    updateDoc,
  } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import { app } from "../../firebase-config";
  
  async function UpdateUser(uid, cart) {
    try {
      const targetUid = getAuth(app).currentUser?.uid || uid;
      const db = getFirestore(app);
      const usersCollection = collection(db, "carts");
      const userDocRef = doc(usersCollection, targetUid);
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const updatedUserData = {
          ...userDocSnapshot.data(),
          cart: cart,
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
  