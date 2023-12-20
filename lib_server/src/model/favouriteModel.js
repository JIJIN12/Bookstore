const mongoose = require('mongoose')
const schema = mongoose.Schema

const favourite_schema = new schema({
   bookid:{type:mongoose.Types.ObjectId,ref:'book_tb'},
   userid:{type:mongoose.Types.ObjectId,ref:'register_tb'}
})

const favourite_model = mongoose.model('favourite_tb',favourite_schema)
module.exports = favourite_model