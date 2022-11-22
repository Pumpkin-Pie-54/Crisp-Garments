import React, { useState, useEffect } from 'react';
import data from './productData.js';
import Cards from './Cards.jsx';
// import Items from './productData'

//example data includes the item name, price, and image
const DisplayCard = (props) => {
  // const {productItems: items} = data;

  
  const [items, setItems] = useState("");
  
  useEffect(()=>{
    const fetchFlasks = async () => {
        let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    console.log('data in useEffect', data)
    setItems(data)
    // console.log('data.data.flasks', data.data.flasks)
    }
    fetchFlasks()
    .catch(console.err)
  },[])

console.log('items after useEffect display cards', items)







  // let items;


  // useEffect(async () => {
  //   try {
  //     let badItems = await fetch('https://fakestoreapi.com/products')
  //     items = badItems.json();
  //     console.log('inside', items);
  //     // .then(json => console.log(json))
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     return await response.json();
  //   }
  //   fetchItems();
  //   .then((saleItems) => {
  //     **then we assign state values**
  //   })
  // })

  // console.log('outside', items);
  
  // const result = data.productItems.filter((item) => item.category === 'Produce');
  // console.log(result);
  
  
  return (
    <section className='itemFlex'>
      <h1>hey guys</h1>
      {items.map((item) => {
        return (
          <div key={item._id}>
            {/* <Cards id={item._id} name={item.name} price={item.price} image={item.image} /> */}
            <Cards id={item.id} name={item.name} price={item.price} image={item.image} />
          </div>
        );
      })}
    </section>
  );
};

export default DisplayCard;

// category
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