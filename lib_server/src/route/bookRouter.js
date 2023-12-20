const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const bookmodel = require('../model/bookModels')
const bookRouter = express.Router()


cloudinary.config({
    cloud_name: 'ddjp6omvg',
    api_key: '123553778373481',
    api_secret: 'KeHv2Fi5dFSVKgqIkoBFDfYnzMY'

})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'bookfiles'
    }
})

const upload = multer({ storage: storage })

const cpUpload = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'bookpdf', maxCount: 8 }
]);



bookRouter.get('/', async function (req, res) {
    try {
        const bookdata = await bookmodel.find()
        if (bookdata) {
            return res.status(200).json({ success: true, error: false, Details: bookdata })
        }
        else {
            return res.status(400).json({ success: False, error: true, message: "bookdata not found" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})

module.exports = bookRouter