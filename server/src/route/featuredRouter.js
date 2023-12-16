const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const featuredmodel = require('../model/featuredmodel')
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

featuredRouter.post('/addfeatured', mulupload, async function (req, res) {
    try {
        console.log('0');
        console.log(req.files);

        if (req.files) {
            const imageFiles = req.files['featured_image:'];
            const bookPdfFiles = req.files['featured_pdf'];
        }
        console.log('1');
        const data = {
            userid: req.body.user_id,
            bookname: req.body.bookname,
            // bookdescription: req.body.bookdescription,
            author: req.body.author,
            bookgenre: req.body.bookgenre,
            image: req.files ? req.files.featured_image[0].path : null,
            bookpdf: req.files ? req.files.featured_pdf[0].path : null
        }
        console.log('2');


        const addfeatured = await featuredmodel(data).save()
        console.log('3');

        if (addfeatured) {
            return res.status(200).json({ success: "true", error: "false", Message: "Book added", details: addfeatured })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})




module.exports = featuredRouter