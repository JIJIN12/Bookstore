const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors')
const authorRouter = require("./src/route/authorRouter");
const bookRouter = require("./src/route/bookRouter");
const favRouter = require("./src/route/favouriteRouter");
const featuredRouter = require("./src/route/featuredRouter");
const loginRouter = require("./src/route/loginRouter");
const registerRouter = require("./src/route/registerRouter");

const app = express();

app.use(cors())
app.use(bodyparser());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //  * every url can access
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/favourite", favRouter);
app.use("/featured", featuredRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

const url =
  "mongodb+srv://jijinsuresh6:jijinsuresh6@cluster0.dh7smys.mongodb.net/BOOKSTORE_SERVER?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(2000, function () {
      console.log("started http://localhost:2000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
