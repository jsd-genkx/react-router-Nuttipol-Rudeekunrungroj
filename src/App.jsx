import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Navigation";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Profile from "./components/Profile";
import ProfileInfo from "./components/ProfileInfo";
import Orders from "./components/Orders";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/profile/*" element={<Profile />}>
            
            <Route path="info" element={<ProfileInfo />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
