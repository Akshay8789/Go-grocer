import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { app } from "../../firebase-config";

async function CreateUser(userid, userEmail, userName) {
  try {
    const db = getFirestore(app);
    const usersCollection = collection(db, "users");
    const cartsCollection = collection(db, "carts");
    const userDocRef = doc(usersCollection, userid);
    const cartDocRef = doc(cartsCollection, userid);
    const userDocSnapshot = await getDoc(userDocRef);
    const cartDocSnapshot = await getDoc(cartDocRef);

    if (!userDocSnapshot.exists()) {
      const userData = {
        address: [],
        uid: userid,
        email: userEmail,
        name: userName,
        phonenumber: "NotSet",
      };

      await setDoc(userDocRef, userData);
      console.log("User document created:", userData);
    } else {
      console.log("User document already exists. Skipping creation.");
    }

    if (!cartDocSnapshot.exists()) {
      const Data = {
        cart: [],
      };

      await setDoc(cartDocRef, Data);
      console.log("User cart document created:", Data);
    } else {
      console.log("User cart document already exists. Skipping creation.");
    }
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
}

export default CreateUser;
