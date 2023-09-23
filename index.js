const express=require("express");
const cors=require("cors")
const {connection}=require("./config/db")
const {bookRoute}=require("./routes/book")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/books",bookRoute)
app.listen(7030,async ()=>{
     
    try {
        await connection
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server connected")
})