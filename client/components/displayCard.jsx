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

// const arrayOfitems = [];
// for (let i = 0 ; i < items.length; i++) {
//   arrayOfitems.push(<div key={items[i].id}>
//           <Cards id={items[i].id} title={items[i].title} price={items[i].price} description={items[i].description} category={items[i].category} rating={items[i].rating}/>
//           </div>)
// }


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
   // id
  // title
  //category
  //description
  // rating
  // image
  // price
  //only 1
        // <Cards id={items[0].id} title={items[0].title} price={items[0].price} description={items[0].description} category={items[0].category} rating={items[0].rating}/>
  return (
    <section className='itemFlex'>
      <h1>hey guys</h1>
      {console.log('im below hey guys but above map')}
      {console.log('items[0]', items[0])}
      {arrayOfItems}
      {/* {items.map((item) => {
        console.log('item in displayCard map', item)
        return (
          <div key={item.id}>
          <Cards id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} rating={item.rating}/>
          </div>
          );
        })} */}
    </section>
  );
};

export default DisplayCard;

//from original project
{/* <Cards id={item._id} name={item.name} price={item.price} image={item.image} /> */}