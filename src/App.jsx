import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Shop from './components/pages/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<Rootlayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/Shop' element={<Shop/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
