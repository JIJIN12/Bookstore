const express = require('express')
const favourite_model = require('../model/favouriteModel')
const CheckAuth = require('../Middleware/CheckAuth')
const  mongoose = require('mongoose')
const favRouter = express.Router()


favRouter.get('/:id', CheckAuth, async function (req, res) {
    try {
        console.log('id', req.userData);
        const userid = req.userData.id
        console.log(userid);

        const book_id = req.params.id
        console.log('111');
        console.log(book_id);

        const favdata = await favourite_model.find({ bookid: book_id, userid: userid })
        console.log('favdat', favdata);
        if (favdata[0]) {
            return res.status(400).json({ success: false, error: true, Message: 'data already added' })
        }


        const favourite_data = {
            userid: userid,
            bookid: book_id,

        }

        const favourite_save = await favourite_model(favourite_data).save()
        if (favourite_save) {
            return res.status(200).json({ success: "true", error: "false", Message: "Book added", details: favourite_save })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })
    }
})

module.exports = favRouter