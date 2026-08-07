import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase-config";

async function AddUserOrdertoCompleted(userid, order) {
  try {
    const uid = getAuth(app).currentUser?.uid || userid;
    const db = getFirestore(app);
    const ordersCollection = collection(db, "orders");
    const userDocRef = doc(ordersCollection, uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const existingData = userDocSnapshot.exists() ? userDocSnapshot.data() : {};
    const updatedOrders = [...(existingData.completed || []), order];

    await setDoc(userDocRef, {
      ...existingData,
      onorder: existingData.onorder,
      completed: updatedOrders,
    });
    console.log("Order added successfully to completed.");
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
}

async function MarkOrderAsComplete(userid, order) {
  try {
    const uid = getAuth(app).currentUser?.uid || userid;
    await AddUserOrdertoCompleted(uid, order);
    const db = getFirestore(app);
    const ordersCollection = collection(db, "orders");
    const userDocRef = doc(ordersCollection, uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const existingData = userDocSnapshot.exists() ? userDocSnapshot.data() : {};
    const updatedOrders = existingData.onorder.filter(
      (item) => item.id !== order.id
    );

    await setDoc(userDocRef, {
      ...existingData,
      onorder: updatedOrders,
      completed: existingData.completed || [],
    });

    console.log("Order marked as complete successfully.");
  } catch (error) {
    console.error("Error marking order as complete:", error);
    throw error;
  }
}

export default MarkOrderAsComplete;
