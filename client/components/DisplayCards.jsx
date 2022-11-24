import React, { useState, useEffect, useContext } from 'react';
import { TotalCartContext } from '../context/TotalCartContext.jsx';
import Cards from './Cards.jsx';

//example data includes the item name, price, and image
const DisplayCards = ({ category, setCategory }) => {

  const [items, setItems] = useState([]);
//   const [totalCart, setTotalCart] = useState([]);
const {totalCart, setTotalCart} = useContext(TotalCartContext)

  useEffect(() => {
	fetch('https://fakestoreapi.com/products/')
	  .then((res) => res.json())
	  .then((data) => {
		for (let i = 0; i < data.length; i++) {
			data[i].price = data[i].price.toFixed(2)
		}
		setItems(data);
	  });
	}, []);

	return (
	  <section className="itemFlex">
		{items.filter(item => {
          if(!category) return item;
          else if(item.category === category) return item;
        })
        .map((item) => {
		  return (
			<div key={item.id}>
			  <Cards totalCart={totalCart} setTotalCart={setTotalCart} id={item.id} title={item.title} price={item.price} image={item.image} />
			</div>
		  );
		})}
	  </section>
	);
};

export default DisplayCards;