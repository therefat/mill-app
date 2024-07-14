import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { getDatabase, ref, onValue } from "firebase/database";

import { collection, onSnapshot } from 'firebase/firestore';
import { BalanceAddContex } from '../contex/BalanceAddContex';

function Balance() {
    const [data,setData] = useState([])
    const {BalanceAddData,setBalanceAddData} = useContext(BalanceAddContex)

  
    useEffect(() => {
        // Reference to the Firestore collection
    const collectionRef = collection(db, 'balance');
  
    // Function to fetch data from the Firestore collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(fetchedData);
    });
  
    // Cleanup function to detach the listener on unmount
    return unsubscribe;
        
  
  
      }, []);
    //   console.log(data) 
    // console.log(BalanceAddData) 
    const totalBalance = BalanceAddData.reduce((sum,item) => sum + parseInt(item.balance),0)
  return (
    <>
        <div>
        <h1>Balance Info</h1>
         <h2>Total Balance {totalBalance} </h2>
        
         <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
            </tr>
        </thead>
        <tbody>
          
            {
            data?.map((info) => (
               
                <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {info.time}
                </th>
                <td className="px-6 py-4">
                    {info.details}
                </td>
                <td className="px-6 py-4">
                    {info.balance}
                </td>
                <td className="px-6 py-4">
                {info.id}
                </td>
            </tr> 
            ))
        } 
            
        </tbody>
    </table>
</div>
    </div>
    </>
  )
}

export default Balance