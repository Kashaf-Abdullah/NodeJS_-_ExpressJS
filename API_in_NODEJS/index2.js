const http= require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{

console.log(req.url);//what user type in url



const data=fs.readFileSync(`${__dirname}/userapi.json`,"utf-8")
const objData=JSON.parse(data);
if(req.url=="/"){
   
    res.end("hello134")
}
else if(req.url=="/home"){
    res.end('hello from home page');
    
}

//API IN NODEJS

else if(req.url=="/userapi"){
    
res.end(objData[2].name)

}
else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end('404 page not found')}
})


server.listen(8000,"127.0.0.1",
console.log('listening at 8000 port')
);
