import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { getDatabase, ref, onValue } from "firebase/database";

import { collection, onSnapshot } from 'firebase/firestore';


function Home() {
    const [data,setData] = useState([])

  
    useEffect(() => {
        // Reference to the Firestore collection
    const collectionRef = collection(db, 'millData');

    // Function to fetch data from the Firestore collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(fetchedData);
    });

    // Cleanup function to detach the listener on unmount
    return unsubscribe;
        


      }, []);
      console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home