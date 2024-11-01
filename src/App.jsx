import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Navigation";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

function App() {
 return (
  <div>
    <BrowserRouter>
    
      <Navigation/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/products" element={<ProductList/>}/>
<Route path="/products/:id" element={<ProductDetail/>}/>



      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
