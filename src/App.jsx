import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import MillInfoProvider from './contex/MILLInfoContex'
import BalanceAddProvider from './contex/BalanceAddContex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MillInfoProvider>
    <BalanceAddProvider>
    <Home/>
    </BalanceAddProvider>
    </MillInfoProvider>
      </>
  )
}

export default App
