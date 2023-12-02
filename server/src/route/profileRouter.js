const express = require('express')
const registermodel = require('../model/registerMode')
const bookmodel = require('../model/bookModel')
const profileRouter = express.Router()

profileRouter.get('/', async function (req, res) {
    try {
        console.log('profile',req.query);
        const prodileid = req.query.userid
        const profiledata = await registermodel.findOne({ login_id: prodileid })
        console.log(profiledata);
        if (profiledata) {
            return res.status(200).json({ success: true, error: false, Details: profiledata })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})
profileRouter.get('/activity', async function (req, res) {
    try {
        const prodileid = req.query.userid
        const Activitydata = await bookmodel.findOne({ userid: prodileid })
        console.log(Activitydata);
        if (Activitydata) {
            return res.status(200).json({ success: true, error: false, Message: "Activity data found",Details: Activitydata })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})
profileRouter.get('/editprofile/:id', async function (req, res) {
    try {
        const prodileid = req.params.id
        const profiledata = await registermodel.findOne({ login_id: prodileid })
        console.log(profiledata);
        if (profiledata) {
            return res.status(200).json({ success: true, error: false, Details: profiledata })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})
profileRouter.get('/updateprofile', async function (req, res) {
    try {
        const data = {
            FullName: req.body.FullName,
            Email:req.body.Email ,
            bookname:req.body.bookname ,
            favourite_genre: req.body.favourite_genre,
            preferred_language: req.body.preferred_language
        }
        const profiledata = await registermodel(data).save()
        console.log(profiledata);
        if (profiledata) {
            return res.status(200).json({ success: true, error: false, Message: "profile updated" })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})
profileRouter.get('/deleteprofile/:id', async function (req, res) {
    try {
       const id = req.query.userid
        const profiledata = await registermodel.deleteOne({login_id:id})
        console.log(profiledata);
        if (profiledata) {
            return res.status(200).json({ success: true, error: false, Message: "profile deleted" })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})




module.exports = profileRouter