const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    description:String,
    price:Number,
    genre:String,
})

const bookModel=mongoose.model("book",bookSchema)
module.exports={bookModel} 
