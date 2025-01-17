// import { STATES } from 'mongoose';
import React from 'react';
// import { useContext, useState } from 'react';
// import Axios from 'axios';

//data includes the name, price, and image of an item
const Cards = ({ id, title, category, description, rating, image, price, totalCart, setTotalCart }) => {

  // useContext

  const addToCart = (event) => {
    const dataToSend = {
      id: id, 
      title: title,
      price: price
    }
    setTotalCart(totalCart.concat(dataToSend));
  }

  return (
    <div className="cards">
      <img
        src={image}
        className='photo'
      />
      <div className="item_details">
        <p>{description}</p>
        <p>{title}</p>
      </div>
      <p>$ {price}</p>
      <button onClick={addToCart} title={title} price={price} id={id} className='button'>Add to Cart</button>
    </div>
  );
};

export default Cards;
