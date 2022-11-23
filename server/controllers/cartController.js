// const { getPathContributingMatches } = require('@remix-run/router/dist/utils.js');
const Cart = require('../models/userModel.js');

const CartController = {

  async createCart(req, res, next) {
    try {
      const { cart } = req.body //is this an array of items in cart
      const { newOrderName } = req.body
      // req.body.orderTime // using date.now
      
      const newCart = await Cart.create(
        { orderName: newOrderName, 
          // orderTime: new Date.now(), //moved to default on schema
          numberOfItems: cart.length,
          items: cart, 
        });
        console.log('newcart after create', newCart)
        res.locals.newCart = newCart;
        return next();
    } catch(err) {
      return next({
        log: 'Express error in cartController.createCart',
        status: 400,
        message: {
          err: 'An error occured inside the cartController.createCart middleware'
        },
      });
    }
  },

  async getCart(req, res, next) {
    try{
      const { previousOrderName } = req.body
      const found = await Cart.findOne({ orderName: previousOrderName }); 
      res.locals.whatsInTheCart = found.items;
      return next();
    } catch(err) {
      return next({
        log: 'Express error in cartController.getCart',
        status: 400,
        message: {
          err: 'An error occured inside the cartController.getCart middleware'
        },
      });
    }
  },

  async deleteCart(req, res, next) {
    try{
      const { previousOrderName } = req.body
      const found = await Cart.deleteOne({ orderName: previousOrderName }); 
      const deleted = await found;
      if(deleted.deletedCount === 0) res.locals.isDeleted = false;
      else res.locals.isDeleted = true;
      return next();
    } catch(err) {
      return next({
        log: 'Express error in cartController.getCart',
        status: 400,
        message: {
          err: 'An error occured inside the cartController.getCart middleware'
        },
      });
    }
  }

};

  module.exports = CartController;

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