const express = require("express");
const bcrypt = require("bcryptjs");
const webtoken = require("jsonwebtoken");
const loginmodel = require("../model/loginModel");
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    console.log(req.body.username);
    console.log("oldusername1");
    const username = { username: req.body.username };
    const oldusername = await loginmodel.findOne(username);

    console.log(oldusername);
    console.log("oldusername", oldusername);
    if (!oldusername) {
      return res
        .status(400)
        .json({ success: false, error: true, Message: "username not found" });
    }
    // console.log('oldpassword',req.body.password);
    console.log(oldusername.password);

    const oldpassword = await bcrypt.compare(
      req.body.password,
      oldusername.password
    );
    console.log(oldpassword);

    if (!oldpassword) {
      console.log("kkk");

      return res
        .status(400)
        .json({ success: false, error: true, Message: "password not found" });
    } else {
      console.log("kkk11");

      var token = webtoken.sign(
        {
          username: oldusername.username,
          password: oldusername.password,
          role: oldusername.role,
          id: oldusername._id,
        },
        "divide&rule"
      );
      console.log("111");
      return res
        .status(200)
        .json({
          success: true,
          error: false,
          role: oldusername.role,
          token: token,
          user_id: oldusername._id,
          username: oldusername.username,
          Message: "succesfull",
        });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

module.exports = loginRouter;
