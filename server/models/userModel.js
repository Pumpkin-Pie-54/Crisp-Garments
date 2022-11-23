const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    orderName: String,
    orderTime: {
        type: Date,
        default: Date.now
    },
    numberOfItems: Number,
    items: Array, //might need to update to determine how to
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

