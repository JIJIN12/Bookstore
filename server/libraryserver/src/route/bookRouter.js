const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const bookmodel = require('../model/bookModel')
const bookRouter = express.Router()
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {

//         cb(null, '../client/public/images/uploads')
//     },
//     filename: function (req, file, cb) {
//         //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.originalname)
//     }
// })

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


bookRouter.post('/addbook', async function (req, res) {
    try {
        console.log(req.body.user_id);

        // const genre = req.body.bookgenre.toLowerCase()
        const bookdata = {
            userid: req.body.user_id,
            bookname: req.body.bookname,
            bookdescription: req.body.bookdescription,
            author: req.body.author,
            bookgenre: req.body.bookgenre,
            // image: req.body.filename,
            // bookpdf: req.body.pdfname,
            image: req.file ? req.file.path : null,
            bookpdf: req.file ? req.file.path : null
        }



        const addbook_data = await bookmodel(bookdata).save()
        // console.log(addbook_data);
        if (addbook_data) {
            return res.status(200).json({ success: "true", error: "false", Message: "Book added", details: addbook_data })

        }
        else {
            return res.status(400).json({ success: False, error: true, message: "addbookdata not found" })

        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})



bookRouter.post('/uploads', cpUpload, async function (req, res) {
    try {
        // console.log(req.files);
        console.log('body',req.body);
        console.log('files');
        if (req.files) {
            console.log('success');
            const imageFiles = req.files['image'];
            const bookPdfFiles = req.files['bookpdf'];

            console.log(req.files);
            // const filedata = {
                
            //     image: req.files.image[0].path : null,
                
            //     bookpdf: req.files.bookpdf[0].path : null
            // }

            const savefile = await bookmodel.updateOne({bookname:req.body.bookname},{$set:{image:req.files.image[0].path,bookpdf:req.files.bookpdf[0].path}})




            

const fileupload = await bookmodel.aggregate([
    {

    }
])

            // const imageFiles = req.file.path;
            // const bookPdfFiles = req.file.path;

            // You can now process these files as needed
            // console.log('imageFiles:', imageFiles);
            // console.log('bookPdfFiles:', bookPdfFiles);
            return res.status(200).json({ success: true, error: false, message: "file added" })

        }
        else {
            return res.status(400).json({ success: false, error: true, message: "file upload error" })

        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})


bookRouter.get('/editbook/:id', async function (req, res) {
    try {
        const id = req.params.id
        const editbook = await bookmodel.findOne({ _id: id })
        if (editbook) {
            return res.status(200).json({ success: "true", error: "false", details: editbook })

        }
        else {
            return res.status(400).json({ success: False, error: true, message: "editbook error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})


bookRouter.post('/updatebook', async function (req, res) {
    try {

        const bookdata = {
            bookname: req.body.bookname,
            bookdescription: req.body.bookdescription,
            author: req.body.author,
            bookgenre: req.body.bookgenre,
            image: req.body.image
        }
        const updatebook = await bookmodel(bookdata).save()
        if (updatebook) {
            return res.status(200).json({ success: "true", error: "false", details: updatebook })

        }
        else {
            return res.status(400).json({ success: False, error: true, message: "update error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})


bookRouter.get('/delete', async function (req, res) {
    try {
        const id = req.params.id
        const deletebook = await bookmodel.findOne({ id: _id })
        if (deletebook) {
            return res.status(200).json({ success: "true", error: "false", Message: 'Delete Successful' })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})


bookRouter.post('/check', async function (req, res) {
    try {
        const selectedGenre = Object.keys(req.body);
        console.log(selectedGenre);
        let filteredbook = [];

        if (selectedGenre == 0) {
            filteredbook = await bookmodel.find()
        }

        else {
            for (const bookgenre of selectedGenre) {
                if (bookgenre == 'action') {
                    const actionbook = await bookmodel.find({ bookgenre: 'action' })
                    filteredbook = filteredbook.concat(actionbook)
                }
                else if (bookgenre == 'fantasy') {
                    const fantasybook = await bookmodel.find({ bookgenre: 'fantasy' })
                    filteredbook = filteredbook.concat(fantasybook)
                }
                else if (bookgenre == 'fiction') {
                    const fictionbook = await bookmodel.find({ bookgenre: 'fiction' })
                    filteredbook = filteredbook.concat(fictionbook)
                }
                else if (bookgenre == 'romance') {
                    const romancebook = await bookmodel.find({ bookgenre: 'romance' })
                    filteredbook = filteredbook.concat(romancebook)
                }
                else if (bookgenre == 'scifi') {
                    const scifibook = await bookmodel.find({ bookgenre: 'scifi' })
                    filteredbook = filteredbook.concat(scifibook)
                }
                else if (bookgenre == 'thriller') {
                    const thrillerbook = await bookmodel.find({ bookgenre: 'thriller' })
                    filteredbook = filteredbook.concat(thrillerbook)
                }
            }

        }
        console.log(filteredbook);


        if (filteredbook.length > 0) {
            return res.status(200).json({ success: true, error: false, Details: filteredbook })
        }
        else {
            return res.status(400).json({ success: false, error: true, Message: ' genre error' })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, Message: ' Something went wrong' })

    }
})


module.exports = bookRouter