import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkPj7H8R7NDnXjbOSjiMBAwa9feLoXYmA",
  authDomain: "react-app-ad070.firebaseapp.com",
  projectId: "react-app-ad070",
  storageBucket: "react-app-ad070.appspot.com",
  messagingSenderId: "240603632294",
  appId: "1:240603632294:web:cb25ea45160254a8ff9a67"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData(){
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef)
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) =>{
      return {...item.data(), id: item.id};
    }
  )
  return docsData
}

async function getProduct(id){
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id};
    } else{
        throw new Error("No encontramos ese producto.")
    }
}

async function getCategory(){
    const productsRef = collection(db, "products");

    const q = query(productsRef, where("categoryId", "==", "categoryId"));
    const documentsSnapshot = await getDocs(q);

    const documents = documentsSnapshot.docs;
    const docsData = documents.map((item) => {
        return { ...item.data(), id: item.id };
    });
    return docsData
}

async function createOrder(ordenData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, ordenData)
  
  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
 

}

export {getData, getProduct, getCategory, createOrder, getOrder}