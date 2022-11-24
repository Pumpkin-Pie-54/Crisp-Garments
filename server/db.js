const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://parklink87:Clover33%40@cluster0.msjqutb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DB via Bo')
})


// const { Pool } = require("pg");
// const dotenv = require("dotenv");
// dotenv.config();

// /*
//   The process.env variables are hidden for security reasons in our local .env file.
//   You are going to have to look up how to connect your own sql db and encrypt your information.
// */

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log(process.env.PGUSER)
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };