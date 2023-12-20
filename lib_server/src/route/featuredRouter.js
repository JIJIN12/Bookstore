const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const featuredmodel = require('../model/featuredModel')
const featuredRouter = express.Router()


cloudinary.config({
    cloud_name: 'ddjp6omvg',
    api_key: '123553778373481',
    api_secret: 'KeHv2Fi5dFSVKgqIkoBFDfYnzMY'
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'features_files'
    }
})

const upload = multer({ storage: storage })

const mulupload = upload.fields([
    { name: 'featured_image', maxCount: 1 },
    { name: 'featured_pdf', maxCount: 8 }
])


featuredRouter.get('/', async function (req, res) {
    try {
        const data = await featuredmodel.find()
        if (data) {
            return res.status(200).json({ success: true, error: false, Details: data })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})


module.exports = featuredRouter