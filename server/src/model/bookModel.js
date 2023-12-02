const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookschema = new schema({
    userid: { type: String },
    bookname: { type: String },
    bookdescription: { type: String },
    author: { type: String },
    bookgenre: { type: String },
    image: { type: String },
    bookpdf: { type: String }
})

const bookmodel = mongoose.model('book_tb', bookschema)
module.exports = bookmodel