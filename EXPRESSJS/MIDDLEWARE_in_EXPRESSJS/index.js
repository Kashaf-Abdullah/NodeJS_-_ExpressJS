const path =require('path')
const express =require("express")
const app=express()

//relative path  ../../ 
//use abosulte path

console.log(__dirname);
// console.log(path.join(__dirname,'./public'))

const staticPath=path.join(__dirname,'./public')

//built in middleware
app.use(express.static(staticPath))


const PORT= 4000

//first argument is for request and 2nd argument is for response
app.get("/",(req,res)=>{

    res.send("welcome to home page")
});




app.get("/about",(req,res)=>{

    res.status(200).send("welcome to about page")
});



app.listen(PORT,()=>{
    console.log('listening to the port on '+PORT);
    
})