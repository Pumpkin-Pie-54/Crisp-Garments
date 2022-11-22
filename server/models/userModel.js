const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    orderName: String,
    orderTime: String,
    items: [{
        title: String,
        id: String,
        price: String,
    }]
});

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;

// const userSchema = new Schema({
//     userName: { type: String },
//     userPassword : { type: String },
//     orders: [{
//         orderName: { type: String },
//         items: [{
            
//         }]
//     }]
// })

// const userSchema = new Schema ([
//     orderName: String,
//     items: [{strings}],
//     total: String,
    
// ])

// id
// title
// price
// description
// category
// image
//rating {
//     rate:
//     count:
// }

