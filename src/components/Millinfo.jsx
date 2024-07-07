import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { getDatabase, ref, onValue } from "firebase/database";

import { collection, onSnapshot } from 'firebase/firestore';

function Millinfo() {
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
    <div>
        <h1>Mill Expense</h1>
        
         <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Details
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
          
            {
            data?.map((expense) => (
               
                <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {expense.time}
                </th>
                <td class="px-6 py-4">
                    {expense.details}
                </td>
                <td class="px-6 py-4">
                    {expense.price}
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr> 
            ))
        } 
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Millinfo; 


