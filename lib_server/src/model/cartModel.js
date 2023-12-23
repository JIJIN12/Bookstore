const mongoose = require('mongoose')
const schema = mongoose.Schema

const cart_schema = new schema({
   bookid:{type:mongoose.Types.ObjectId,ref:'book_tb'},
   userid:{type:mongoose.Types.ObjectId,ref:'register_tb'}
})

const cart_model = mongoose.model('cart_tb',cart_schema)
module.exports = cart_model