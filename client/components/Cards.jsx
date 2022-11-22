import { STATES } from 'mongoose';
import React from 'react';
import { useContext, useState } from 'react';
import Axios from 'axios';

//data includes the name, price, and image of an item
const Cards = (item) => {



  //// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"  
  
  // id
  // title
  //category
  //description
  // rating
  // image
  // price
  const { id, title, category, description, rating, image, price } = item;

  // const addToCart = () => {
  //   Axios.post('http://localhost:3000/api/cart', 
  //     {
  //       "_id": id,
  //       "product_id": id
  //     }
  //   )
  // }

  //WTF NO MORE MAP, LET'S USE A LOOP


  return (
    <div className="cards">
      <img
        // src={image}
        className='photo'
      />
      <div className="item_details">
        <p>{title}</p>
        <p>{price}</p>
        <button className='button'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
