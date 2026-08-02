import {
    getFirestore,
    collection,
    doc,
    getDoc,
  } from "firebase/firestore";
  import { app } from "../../firebase-config";
  
  async function GetCart(userid) {
    try {
      const db = getFirestore(app);
      const usersCollection = collection(db, "carts");
      const userDocRef = doc(usersCollection, userid);
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        // If the document exists, return the user data
        const userData = userDocSnapshot.data();
        console.log("User data retrieved:", userData);
        return userData;
      } else {
        console.log("User document not found for UID:", userid);
        return null; // Return null or handle accordingly if the document doesn't exist
      }
    } catch (error) {
      console.error("Error getting user document:", error);
      throw error;
    }
  }
  
  export default GetCart;
  