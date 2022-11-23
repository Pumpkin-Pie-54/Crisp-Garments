import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./Navbar";
import DisplayCards from "./DisplayCards.jsx";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import { TotalCartContextProvider } from "../context/TotalCartContext.jsx";

export default function App() {
  const [category, setCategory] = useState('');

  return (
    <TotalCartContextProvider>
      <Navbar category={category} setCategory={setCategory} />
      <div className="container">
        <DisplayCards category={category} setCategory={setCategory} />
      </div>

      <Routes>

        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
      </Routes>
    </TotalCartContextProvider>
  )
  
}


