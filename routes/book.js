const express=require("express")
const bookRoute=express.Router();
const {addBook,deleteBook,getAllBook}=require("../controller/book.controller")
bookRoute.get("/",getAllBook)
bookRoute.delete("/:id",deleteBook)
bookRoute.post("/",addBook)
module.exports={bookRoute}