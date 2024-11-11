import { useState } from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route/>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = { <About /> } />
        <Route/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
