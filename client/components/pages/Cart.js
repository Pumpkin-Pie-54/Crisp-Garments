import { useEffect, useState, useContext } from 'react';
import DisplayCards from '../DisplayCards.jsx';
import Axios from 'axios';
import { TotalCartContext } from '../../context/TotalCartContext.jsx';

export default function Cart() {
	// const [items, cartItems] = useState([]);
	const { totalCart, setTotalCart } = useContext(TotalCartContext);
	let newOrderName;

	// //for each item in totalCart,
	const currentCart = [...totalCart];
	console.log('currentCart', currentCart);
	console.log('currentCart[price]', currentCart[0].price);
	// const runningTotal = currentCart.reduce((a, b) => Number(a.price) + Number(b.price), 0);
	let runningTotal = 0;
	currentCart.forEach((item) => {
		runningTotal += Number(item.price);
	});
	runningTotal = runningTotal.toFixed(2);
	console.log('runningTotal', runningTotal);

	const arrayToDisplay = currentCart.map((el) => {
		// console.log('hello this is inside forEach', el), (<h1>{'I am an item!'}</h1>);
		return (
			<li className="itemsInCart">
				{el.title}: ${el.price}
			</li>
		);
	});
	console.log('arrayToDisplay', arrayToDisplay);
	// console.log('totalCart', totalCart)
	// console.log('arrayToDisplay', arrayToDisplay)
	//   //display a card with the correct info

	// // useEffect(() => {
	// //   Axios.get("http://localhost:3000/api/cart")
	// //     .then((res) => {
	// //       cartItems(res.data);
	// //       return cartItems;
	// //     })
	// //     .catch((err) => console.log( `Error: ${err}`));
	// // }, []);
	const submitCart = async (event) => {
		event.preventDefault();
		const response = await fetch('http://localhost:3000/api/cart', {
			method: 'POST',
			body: JSON.stringify({
				cart: totalCart,
				newOrderName: newOrderName,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		});
		const submitted = await response.json();
		console.log(submitted);
	};

	const handle = (event) => {
		newOrderName = event.target.value;
	};

	return (
		<div className="shoppingCart">
			<ul className="listOfItemsInCart">{arrayToDisplay}</ul>
			<p className="runningTotal">${runningTotal}</p>
			<form onSubmit={submitCart}>
				<label>Order Name</label>
				<input onChange={(event) => handle(event)} type="text" placeholder="Order Name"></input>
				<input type="submit" value="Submit your order!"></input>
			</form>
		</div>
	);
}

// <h1>Shopping Cart</h1>
// <div className='cartItems'>
//   {arrayToDisplay}
//   {/* <for each item in total carts, dispaly a card of it> */}
//   {/* do we want everything including add item button
//   maybe need to make a new page for Cart items???
//   DisplayCard is just a placeholder for now to know that our GET req is working*/}
//   {/* <DisplayCards totalCart={totalCart} /> */}
//   {/* <DisplayCards totalCart={totalCart} /> */}

// </div>
