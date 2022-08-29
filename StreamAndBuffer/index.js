

const fs=require("fs")
const http=require("http")

const server=http.createServer();

server.on("request",(req,res)=>{
    // var fs=require("fs");
    // fs.readFile("Streams.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });





    //2nd way
//Reading from a Stream
//create a readable stream
//Handle stream events ----> data ,end and error


const rstream=fs.createReadStream("Streams.txt")
rstream.on('data',(chunkdata)=>{  //data event fired

    res.write(chunkdata)
})
rstream.on('end',()=>{//end event fired
    res.end();
})  

//if file does not exist so it will show file not found
rstream.on("error",(err)=>{//error event fired
    console.log(err);
    res.end("file not found")
    
})

//3rd way of doing this in StreamAndBuffer folder 
})

server.listen(8000,"127.0.0.1");