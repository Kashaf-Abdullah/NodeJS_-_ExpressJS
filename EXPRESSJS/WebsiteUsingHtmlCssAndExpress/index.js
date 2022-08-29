const express=require("express")
const path=require("path")
const app=express()
const port=4000;

console.log(__dirname)



console.log(path.join(__dirname,'./public'));

const staticPath=path.join(__dirname,'./public')

//built in middleware


app.use(express.static(staticPath))


app.get("/",(req,res)=>{
    console.log('hello');
    res.send("hello")
    
})
app.listen(port,()=>{
console.log('listening at port '+port);

})
