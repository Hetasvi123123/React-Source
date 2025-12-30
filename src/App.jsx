import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Technologies from './Components/Technologies/Technologies'
import Navbar from './Components/Home/Navbar'
import Features from './Components/Features/Features'
import Footer from './Components/Home/Footer'
import Contact_us from './Components/Contact_us/Contact_us'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/features' element={<Features />} />
         <Route path='/contact' element={<Contact_us />} />

      </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App