//ROUTING

//   /home - welcome to home page
//   /contact - welcome to contact page
//   /about- welcome to about page

const express =require("express")
const app=express()
const PORT= 5000


app.get("/",(req,res)=>{
//Html element response can be send
    // res.send("<h1>HELLO</h1>welcome to home page")
    // res.send("<br> <h4>HOME PAGE</h4>") //IF MULTIPLE DATA SEND SO WE CAN NOT USE AGAIN RES.SEN()


//RES.WRITE for sending multiple data
res.write("<h1>HELLO</h1>")
    res.write("<h1>Welcome to home page</h1>")
    res.send()
});




app.get("/about",(req,res)=>{

    res.status(200).send("welcome to about page")
});




app.get("/temp",(req,res)=>{
    //passing javascript object then express convert it into jsonx 

    // res.send({id:1,
    // name:"kashaf"})


//multiple object can be send just make it array of object
  
//we can res.json instead of res.send
    res.send([{id:1,
        name:"kashaf"}, 

        {id:2,
            name:"Ayesha"}
    ])
});





//The methods are identical when an object or array is passed 
//but res.json() will also convert non-objects,
//such as null and undefined ,which are not valid JSON






app.listen(PORT,()=>{
    console.log('listening to the port on '+PORT);
    
})