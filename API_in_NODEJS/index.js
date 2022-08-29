const http= require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{

console.log(req.url);//what user type in url
if(req.url=="/"){
   
    res.end("hello134i")
}
else if(req.url=="/home"){
    res.end('hello from home page');
    
}

//API IN NODEJS

else if(req.url=="/userapi"){
    fs.readFile(`${__dirname}/userapi.json`,"utf-8",(err,data)=>{
         console.log(data);
res.end(data)






    })

}
else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end('404 page not found')}
})


server.listen(8000,"127.0.0.1",
console.log('listening at 8000 port')
);
