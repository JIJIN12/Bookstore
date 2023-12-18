const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const authormodel = require('../model/authormodel')
const authorRouter = express.Router()


cloudinary.config({
    cloud_name:'ddjp6omvg',
    api_key:'123553778373481',
    api_secret:'KeHv2Fi5dFSVKgqIkoBFDfYnzMY'
})

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'authorfiles'
    }
})

const upload = multer({storage:storage})

authorRouter.get('/',async function(Req,res){
    try {
        const auhtordata = await authormodel.find()
        if(auhtordata){
            return res.status(200).json({ success: true, error: false, Details: auhtordata })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })
        
    }
})


module.exports = authorRouter