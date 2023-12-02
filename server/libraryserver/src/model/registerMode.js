const mongoose = require('mongoose')
const schema = mongoose.Schema


const registerschema = new schema({
    login_id:{type:String},
    FullName:{type:String},
    Email:{type:String},
    bookname:{type:String},
    favourite_genre:{type:String},
    preferred_language:{type:String},
    booknumber:{type:String},
})

const registermodel = mongoose.model('register_tb',registerschema)
module.exports = registermodel