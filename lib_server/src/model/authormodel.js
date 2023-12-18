const mongoose = require('mongoose')
const schema = mongoose.Schema

const authorschema = new schema({
    authorname:{type:String},
    image:{type:String},
    genre:{type:String},
    author_description:{type:String}
})

const authormodel = mongoose.model('author_tb',authorschema)
module.exports = authormodel