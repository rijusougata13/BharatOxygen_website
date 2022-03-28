import firebase from '../firebase_services/firebase_config';


const firestoreDB = firebase.firestore();

const suppliersRef= firestoreDB.collection("suppliers");
const volunteersRef= firestoreDB.collection("volunteers");

export const addSupplier = async(data)=> await suppliersRef.add(data);
export const addvolunteer = async(data)=> await volunteersRef.add(data);

export const getAllSuppliers = async()=>{
    console.log("getAllSuppliers");
    const snapshot=await suppliersRef.get();
    return snapshot.docs.map(doc=> doc.data());
};

export const getAllVolunteer = async()=>{
    console.log("getAllVolunteer");
    const snapshot=await volunteersRef.get();
    return snapshot.docs.map(doc=> doc.data());
};



export default suppliersRef;



