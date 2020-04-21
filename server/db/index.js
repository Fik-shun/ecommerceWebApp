const mongoose = require('mongoose')

// this is our MongoDB database
const dbRoute =
  'mongodb://127.0.0.1:27017/users'
  // 'mongodb+srv://priyanshu:priyanshu@ecommerceproj-c6tem.mongodb.net/test?retryWrites=true&w=majority'

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection

module.exports = db


