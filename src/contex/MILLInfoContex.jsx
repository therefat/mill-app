import { createContext, useEffect, useState } from "react";
import { db } from '../firebase.config'
import { getDatabase, ref, onValue } from "firebase/database";

import { collection, onSnapshot } from 'firebase/firestore';

export const MillInfoContex = createContext('')

const MillInfoProvider = ({children}) => {
    // state to hold millinfo data
    const [MillInfoData,setMillInfoData] = useState();
    useEffect(() => {
        // Reference to the Firestore collection
    const collectionRef = collection(db, 'millData');

    // Function to fetch data from the Firestore collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMillInfoData(fetchedData);
    });

    // Cleanup function to detach the listener on unmount
    return unsubscribe;
        


      }, []);
      console.log(MillInfoData)
      return <MillInfoContex.Provider value={{MillInfoData,setMillInfoData}}>
        {children}
      </MillInfoContex.Provider>


}
export default MillInfoProvider