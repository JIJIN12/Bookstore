const mongoose = require('mongoose')
const schema = mongoose.Schema

const featuredschema = new schema({
    userid: { type: String },
    bookname: { type: String },
    author: { type: String },
    bookgenre: { type: String },
    image: { type: String },
    bookpdf: { type: String }
})

const featuredmodel = mongoose.model('featured_tb',featuredschema)
module.exports = featuredmodel