import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Body from "./component/Body";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Body/>
    </>
  )
}

export default App
