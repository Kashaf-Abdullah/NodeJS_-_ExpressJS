//ROUTING

//   /home - welcome to home page
//   /contact - welcome to contact page
//   /about- welcome to about page

const express =require("express")
const app=express()
const PORT= 4000


app.get("/",(req,res)=>{

    res.send("welcome to home page")
});




app.get("/about",(req,res)=>{

    res.status(200).send("welcome to about page")
});



app.listen(PORT,()=>{
    console.log('listening to the port on '+PORT);
    
})