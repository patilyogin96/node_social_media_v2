const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser')
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose');

// middleware
app.use(express.urlencoded());
app.use(cookieParser())

// use express router
app.use("/", require("./routes/index"));


// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("error is starting server", err);
    return;
  }
  console.log(`Server is running on port :${port}`);
});
