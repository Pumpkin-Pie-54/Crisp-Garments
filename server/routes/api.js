const express = require('express');

const cartController = require('../controllers/cartController.js');
const productController = require('../controllers/productController.js');


const router = express.Router();

// router.get('/all',
//   productController.getAllProducts,
//   (req, res) => res.status(200).json(res.locals.all)
// );

router.get('/cart',
  cartController.getCart,
  (req, res) => res.status(200).json(res.locals.whatsInTheCart) //returns items array
);

router.post('/cart', 
  cartController.createCart,
  (req, res) => res.status(200).json(res.locals.newCart)
);

router.delete('/cart', 
  cartController.deleteCart,
  (req, res) => res.status(200).send(res.locals.isDeleted) //returns true if deleted, false if not
);

// router.post('/addProduct',
//   productController.createProduct,
//   (req, res) => res.status(200).send(res.locals.createdProduct)
// );

// router.delete('/cart/all',
//   cartController.deleteAllItems,
//   (req, res) => res.status(200).send(res.locals.deleteRes)
// );

// router.delete('/cart',
//   cartController.deleteItem,
//   (req, res) => res.status(200).send(res.locals.deleteRes)
// );







module.exports = router;