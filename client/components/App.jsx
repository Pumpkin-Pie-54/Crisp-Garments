import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./Navbar";
import DisplayCards from "./DisplayCards.jsx";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";

import { TotalCartContextProvider } from "../context/TotalCartContext.jsx";

export default function App() {
  const [category, setCategory] = useState('');
  
      // <div className="container">
      //   <DisplayCards category={category} setCategory={setCategory} />
      // </div>
  return (
    <TotalCartContextProvider>
      <Navbar category={category} setCategory={setCategory} />


      <Routes>
        <Route path='/' element={<DisplayCards category={category} setCategory={setCategory}/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
      </Routes>
    </TotalCartContextProvider>
  )
  
}


