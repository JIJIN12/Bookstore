const express = require("express");
const { default: mongoose } = require("mongoose");
const CheckAuth = require("../Middleware/CheckAuth");
const cart_model = require("../model/cartModel");
const cartRouter = express.Router();

cartRouter.get("/:id", CheckAuth, async function (req, res) {
  try {
    const userid = req.userData.id;
    console.log("cart");
    const book_id = req.params.id;
    const cartdata = await cart_model.find({ bookid: book_id, userid: userid });
    if (cartdata[0]) {
      return res
        .status(400)
        .json({ success: false, error: true, Message: "data already added" });
    }

    const cart_data = {
      userid: userid,
      bookid: book_id,
    };

    const cart_save = await cart_model(cart_data).save();
    if (cart_save) {
      return res.status(200).json({
        success: "true",
        error: "false",
        Message: "Book added",
        details: cart_save,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

cartRouter.get("/useritems/:id", async function (req, res) {
  try {
    const userid = req.params.id;
    console.log(userid);

    const cart_item = await cart_model.aggregate([
      {
        $lookup: {
          from: "book_tbs",
          localField: "bookid",
          foreignField: "_id",
          as: "books",
        },
      },
      {
        $unwind: "$books",
      },
      {
        $match: {
          userid: new mongoose.Types.ObjectId(userid),
        },
      },
      {
        $group: {
          _id: "$_id",
          bookname: { $first: "$books.bookname" },
          image: { $first: "$books.image" },
          bookdescription: { $first: "$books.bookdescription" },
          author: { $first: "$books.author" },
          bookgenre: { $first: "$books.bookgenre" },
        },
      },
    ]);
    console.log(cart_item);
    if (cart_item[0]) {
      return res
        .status(200)
        .json({ success: "true", error: "false", details: cart_item });
    } else {
      return res.status(400).json({
        success: "false",
        error: "true",
        Message: "cart item data not found",
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

cartRouter.post("/delete/:id", async function (req, res) {
  try {
    const id = req.params.id;
    console.log("id");
    const delete_cart = await cart_model.deleteOne({ _id: id });
    if (delete_cart) {
      return res.status(200).json({
        success: "true",
        error: "false",
        Message: "Removal Succesfull",
      });
    } else {
      return res
        .status(400)
        .json({ success: "false", error: "true", Message: "Error" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});
module.exports = cartRouter;
