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


authorRouter.post('/addauthor',upload.single('file'),async function (req,res){
    try {
        console.log("req.files");
        // console.log("req.body",req.body);
        const Genre = req.body.authorgenre.toLowerCase()
        console.log('first');
        const authorName = req.body.authorname.toUpperCase()
        console.log('second');

        const data = {
            authorname:authorName,
            genre:Genre,
            author_description:req.body.author_description,
            image:req.file?req.file.path:null

        }
        console.log('third');

        const authordata = await authormodel(data).save()
        if(authordata){
            return res.status(200).json({ success: "true", error: "false", Message: "author added", details: req.file })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })
        
    }
})

authorRouter.post('/uploads', upload.single('file'), async function (req, res) {
    try {
        console.log('fles',req.file);
        
        if (req.file) {
            console.log('success');
            const imageFile = req.file['image'];
           
            // console.log(req.file.image[0].path);

            const savefile = await authormodel.updateOne({ bookname: req.body.bookname }, { $set: { image: req.file.path } })

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

module.exports = authorRouter