
//qWwxiognwrFERDK3
/*const express=require('express');
const mongooose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors')
const app=express();

app.use(express.json());
app.use("/books",router);
app.use(cors());

mongooose.connect("mongodb+srv://Aditi_data:qWwxiognwrFERDK3@cluster0.9lvyu.mongodb.net/Bookstore?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000,)
}).catch((err)=>console.log(err));*/
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://Aditi_data:qWwxiognwrFERDK3@cluster0.9lvyu.mongodb.net/Bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

