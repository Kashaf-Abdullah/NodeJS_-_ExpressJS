const fs=require("fs") //fs module create

//callbacks make program asynchronous
fs.writeFile('Myfile.txt','This is my Fs_module(Asynchronous) file',
(err)=>{
console.log('file is created');

})


//we pass them a function as an argument - a callback
//that gets called when that task completes
//The callback has an argument that tell you whether 
//the operation complete succesfully
//Now we need to say what to do when fs.writeFile
//has completed (even if it's nothing), and start
//check for errors

fs.appendFile('Myfile.txt',"Hello123",(err)=>{
    console.log('task completed');
    
})



//Read file
//for change buffer data we write utf-8
fs.readFile('Myfile.txt',"utf-8",(err,data)=>{
    console.log(data)//before writing utf-8 ,we got buffer data 

})
