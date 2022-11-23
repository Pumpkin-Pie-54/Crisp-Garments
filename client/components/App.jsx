import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./Navbar";
import DisplayCards from "./DisplayCards.jsx";

export default function App() {
  const [category, setCategory] = useState('');

  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <div className="container">
        <DisplayCards category={category} setCategory={setCategory} />
      </div>
    </>
  )
  
}

// return (
//   <>
//     <Navbar category={category} setCategory={setCategory}/>
//     <div className="container">
//       <DisplayCards category={category} setCategory={setCategory}/>
//     </div>
//   </>
// )


