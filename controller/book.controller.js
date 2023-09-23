const {bookModel}=require("../model/book.model")
const getAllBook=async (req,res)=>{
       try {
        
          const {author,genre,order,sortBy}=req.query
          
           const filter={}
           if(genre){
            filter.genre=genre
           }
           if(author){
            filter.author=author
           }
           const sortOption={}
           if(order){
            sortOption[sortBy]= order==="asc"?1:-1
           }
           console.log(filter,sortOption)
           
           if(Object.keys(filter).length===0 && Object.keys(sortOption).length===0){
            console.log("filter")
            const data=await bookModel.find()
            res.status(201).json({data:data})
           }else {
            console.log("find")
            const getBook=await bookModel.find(filter).sort(sortOption)
            res.status(201).json({data:getBook})
           }
       } catch (error) {
        res.status(401).json({error:error})
       }
}
const deleteBook= async (req,res)=>{
    try {
        const {id}=req.params
        const findBook=await bookModel.findByIdAndDelete({_id:id})
        res.status(201).json({msg:"successfully deleted"})
    } catch (error) {
        res.status(401).json({error:error})
    }

}
const addBook=async(req,res)=>{
      try {
         const createBook=new bookModel(req.body)
         await createBook.save()
         res.status(201).json({msg:"successfully add"})
      } catch (error) {
        res.status(401).json({error:error})
      }
}

module.exports={getAllBook,deleteBook,addBook}