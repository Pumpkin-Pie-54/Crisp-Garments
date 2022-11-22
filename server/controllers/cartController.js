const db = require('../db.js');
const Cart = require('../models/userModel.js');

const CartController = {

  async createCart(req, res, next) {
    try {
      req.body.cart //is this an array of items in cart
      req.body.orderName
      req.body.orderTime // using date.now
      
      const cart = Cart.create({orderName: 'abc', orderTime: new Date.now(), items: req.body.cart, itemsOrder: req.body.cart.length})
      
      const newCreatedArray = req.body.cart.forEach((el) => {

      })

      const createdCart = await Card.create({
        orderName: orderNamefromCart, //called what on req
        orderTime: orderTimeFromCart,
        items: [{ newlyCreatedArray
          price, id, title fromCart
        }]
      })
      cart = [
        {
          price: 10 dollars
          id: 3
          title: mens clothes
        }, {
          price: 4 dollars,
          id: 2,
          title: mens clothes
        }
      ]
    }
  }



  //////////Everything below is old code/////////

  // async getCart(req, res, next) {
  //   try {
  //     const cart = await db.query('SELECT order_item._id, order_item.quantity, product.name, product.price, product.image, product.category FROM order_item INNER JOIN product ON order_item.product_id = product._id;');
  //     res.locals.cart = cart.rows;
  //     return next();
  //   } catch {
  //     return next(
  //       {
  //         log: 'Express error handler caught a middleware error in getCart',
  //         status: 500,
  //         message: { err: 'An error occurred in getCart' }
  //       }
  //     );
  //   }
  // },

  // async addToCart(req, res, next) {
  //   try {
  //     const insertCommand = 'INSERT INTO ORDER_ITEM (_id, product_id, quantity) VALUES (' +
  //      req.body._id + ', ' + req.body.product_id + ', 1)';
  //     const addedRes = await db.query(insertCommand);
  //     res.locals.addedRes = addedRes;
  //     return next();
  //   } catch {
  //     return next(
  //       {
  //         log: 'Express error handler caught a middleware error in addToCart',
  //         status: 500,
  //         message: { err: 'An error occurred in addToCart' }
  //       }
  //     );
  //   }
  // },

  // async deleteItem(req, res, next) {
  //   try {
  //     const deleteCommand = 'DELETE FROM order_item WHERE _id=' + req.body._id;
  //     const deleteRes = await db.query(deleteCommand);
  //     res.locals.deleteRes = deleteRes;
  //     return next();
  //   } catch {
  //     return next(
  //       {
  //         log: 'Express error handler caught a middleware error in getMethod',
  //         status: 500,
  //         message: { err: 'An error occurred in deleteItem' }
  //       }
  //     );
  //   }
  // },

  // async deleteAllItems(req, res, next) {
  //   try {
  //     const deleteRes = await db.query('DELETE FROM order_item');
  //     res.locals.deleteRes = deleteRes;
  //     return next();
  //   } catch {
  //     return next(
  //       {
  //         log: 'Express error handler caught a middleware error in getMethod',
  //         status: 500,
  //         message: { err: 'An error occurred in deleteItem' }
  //       }
  //     );
  //   }
  // }
};

module.exports = CartController;