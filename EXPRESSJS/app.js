const express= require("express")

const app=express()  //now express appplication created
//  app.get(rouetr,callback)
app.get("/",(req,res)=>{

    res.send("hello ") //in nodejs we write end but in express we use send instead of end

})


//The callback function has 2 parameters, request( req) and response(res)
//The request object(Res) represents the HTTP request and
// has properties for the request query string ,parameters ,body,
// HTTP headers etc


//Similarly, the response object represents the HTTP response 
//that the EXPRESS app sends it recieves an HTTP request
