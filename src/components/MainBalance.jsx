import React, { useContext } from 'react'
import { BalanceAddContex } from '../contex/BalanceAddContex'
import { MillInfoContex } from '../contex/MILLInfoContex'

function MainBalance() {

    const {BalanceAddData,setBalanceAddData} = useContext(BalanceAddContex) 
    const {MillInfoData,setMillInfoData} = useContext(MillInfoContex)

    const totalBalance = BalanceAddData.reduce((sum,item) => sum + parseInt(item.balance),0)
    const totalMillExpense = MillInfoData.reduce((sum,item) => sum + parseInt(item.price),0)
    const currentBalance  = totalBalance - totalMillExpense;
  return (
    <div className='container center mb-3'>
        <div>Balnce:</div>
      <div className="mainBalance">
      <div className="flex flex-row ...">
  <div className='bg-[#22bb33] text-xl font-normal p-8 text-white '>
        Main Balance : {totalBalance}
  </div>
  <div className='bg-[#bb2124]  text-xl font-normal p-8 text-white'>Total Expenss : {totalMillExpense}</div>
  <div className='bg-[#f0ad4e] text-xl font-normal p-8 text-white'>CurrentBalance: {currentBalance}</div>
</div>
      </div>
    </div>
  )
}

export default MainBalance