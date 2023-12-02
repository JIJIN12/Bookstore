const express = require('express')
const favourite_model = require('../model/favouriteModel')
const bookmodel = require('../model/bookModel')
const CheckAuth = require('../Middleware/CheckAuth')
const { default: mongoose } = require('mongoose')
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


favRouter.get('/fav/useritems/:id',async function(req,res){
    try {
        const userid = req.params.id
        console.log(userid);

        const favitem = await favourite_model.aggregate([
            {
              '$lookup': {
                'from': 'book_tbs', 
                'localField': 'bookid', 
                'foreignField': '_id', 
                'as': 'books'
              }
            },
            {
                '$unwind':'$books'
            },
            {
                '$match':{
                    userid: new mongoose.Types.ObjectId(userid)
                }
            },
            {
                '$group':{
                    '_id':'$_id',
                    'bookname':{'$first':'$books.bookname'},
                    'image':{'$first':'$books.image'},
                    'bookdescription':{'$first':'$books.bookdescription'},
                    'author':{'$first':'$books.author'},
                    'bookgenre':{'$first':'$books.bookgenre'},
                }
            }
          ])
        console.log(favitem);
        if(favitem[0]){
            return res.status(200).json({ success: "true", error: "false",  details: favitem })

        }
        else{
            return res.status(400).json({ success: "false", error: "true", Message: "favourite data not found" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })
        
    }
})



favRouter.post('/delete/:id',async function (req,res){
    try {
        const id = req.params.id
        console.log('id',id);
        const delete_fav = await favourite_model.deleteOne({_id:id})
        if(delete_fav){
            return res.status(200).json({ success: "true", error: "false",  Message:'Removal Succesfull' })

        }
        else{
            return res.status(400).json({ success: "false", error: "true", Message: "Error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })
    }
})
module.exports = favRouter