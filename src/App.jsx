import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Navigation";

function App() {
 return (
    <BrowserRouter>
    <div>
      <Navigation/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>



      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
