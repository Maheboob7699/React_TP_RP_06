import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './component/home'
import Login from './component/login'
import Signup from './component/signup'
import {BrowserRouter, Route, Routes} from "react-router-dom" 


function App() {


  return (
    <>
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
