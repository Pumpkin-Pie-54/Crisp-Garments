import { useEffect } from "react";
import DisplayCards from "../DisplayCards.jsx";

export default function Cart(category) {

  const handleCheckout = (event) => {

  }

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='shoppingCart'>
      <h1>Shopping Cart</h1>
      <h1>{category}</h1>
      <form onSubmit={handleCheckout}>
        <input type='text' onChange={(event) => handleName(event)} placeholder="enter your name"></input>
        <input type='submit' value="Submit!"></input>
      </form>
      {/* {items.filter(item => item)
        .map((item) => {
          return (
            <div className='cartItems'>
              <DisplayCard items={items} />
            </div>
        )})
      } */}
    </div>
  )
}