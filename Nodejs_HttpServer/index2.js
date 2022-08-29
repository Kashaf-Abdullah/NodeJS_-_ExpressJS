const http= require("http")


const server=http.createServer((req,res)=>{

console.log(req.url);//what user type in url
if(req.url=="/"){
   
    res.end("hello134")
}
else if(req.url=="/home"){
    res.end('hello from home page');
    
}
else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end('404 page not found')}
})


server.listen(8000,"127.0.0.1",
console.log('listening at 8000 port')
);
