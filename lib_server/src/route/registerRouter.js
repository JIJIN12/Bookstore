const express = require('express')
const bcrypt = require('bcryptjs')
const loginmodel = require('../model/loginModel')
const registermodel = require('../model/registerModel')
const registerRouter = express.Router()

registerRouter.post('/', async function (req, res) {
    try {
        console.log('ll',req.body);
        const OldEmail = await registermodel.findOne({ Email: req.body.Email })
        if (OldEmail) {
            return res.status(400).json({ success: false, error: true, Message: "Email already exists" })
        }
        console.log('222');

        const oldusername = await loginmodel.findOne({username:req.body.username})
        console.log('kfjjf');

        if (oldusername) {
            return res.status(400).json({ success: false, error: true, Message: "Username already exists" })
        }
        console.log('oldusename');
        const hashpassword = await bcrypt.hash(req.body.password, 12)
        console.log(hashpassword);
        console.log('11');
        const logindata = {
            username: req.body.username,
            password: hashpassword,
            role: 'user'
        }
        console.log('22');
        const save_logindata = await loginmodel(logindata).save()


        const registerdata = {
            login_id: save_logindata.id,
            FullName: req.body.FullName,
            Email: req.body.Email
        }

        const save_registerdata = await registermodel(registerdata).save()
        if (save_registerdata) {
            return res.status(200).json({ success: true, error: false, details: save_registerdata })

        }
        else {
            return res.status(400).json({ success: false, error: true, Message: "registration error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})





module.exports = registerRouter