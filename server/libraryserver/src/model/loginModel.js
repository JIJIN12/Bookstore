const mongoose = require('mongoose')
const schema = mongoose.Schema


const loginschema = new schema({
    username:{type:String},
    password:{type:String},
    role:{type:String}
})

const loginmodel = mongoose.model('login_tb',loginschema)
module.exports = loginmodel