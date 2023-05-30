import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Receta } from "./types/receta";



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const saveDB = async (receta:Receta) => {
    try {
       await addDoc(collection(db, "users"), receta);
       
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}
export default {saveDB}
