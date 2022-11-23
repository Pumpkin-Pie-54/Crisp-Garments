import { useEffect, useState, useContext } from "react";
import DisplayCards from "../DisplayCards.jsx";
import Axios from 'axios';
import { TotalCartContext } from "../../context/TotalCartContext.jsx";

export default function Cart() {
  // const [items, cartItems] = useState([]);
  const {totalCart, setTotalCart} = useContext(TotalCartContext)
  console.log(totalCart)
  //for each item in totalCart,
  const cart = [...totalCart];
  const arrayToDisplay = totalCart.forEach((el) =>
  {
    <h1>I am an item!</h1>
  })
  
  console.log('totalCart', totalCart)
  console.log('arrayToDisplay', arrayToDisplay)
    //display a card with the correct info
    
  // useEffect(() => {
  //   Axios.get("http://localhost:3000/api/cart")
  //     .then((res) => {
  //       cartItems(res.data);
  //       return cartItems;
  //     })
  //     .catch((err) => console.log( `Error: ${err}`));
  // }, []);

  return (
        <div className='shoppingCart'>
          <h1>Shopping Cart</h1>
          <div className='cartItems'>
            {arrayToDisplay}
            {/* <for each item in total carts, dispaly a card of it> */}
            {/* do we want everything including add item button 
            maybe need to make a new page for Cart items??? 
            DisplayCard is just a placeholder for now to know that our GET req is working*/}
            {/* <DisplayCards totalCart={totalCart} /> */}
            {/* <DisplayCards totalCart={totalCart} /> */}
            
          </div>
        </div>
  )
}