import { createContext, useEffect, useState } from "react";
import { db } from '../firebase.config'
import { getDatabase, ref, onValue } from "firebase/database";

import { collection, onSnapshot } from 'firebase/firestore';

export const MillInfoContex = createContext('')

const MillInfoProvider = ({children}) => {
    // state to hold millinfo data
    const [MillInfoData,setMillInfoData] = useState([]);
    
      
      return <MillInfoContex.Provider value={{MillInfoData,setMillInfoData}}>
        {children}
      </MillInfoContex.Provider>


}
export default MillInfoProvider