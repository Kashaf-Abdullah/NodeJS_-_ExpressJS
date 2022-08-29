//convert object to json
//add it in a file
//read file
//again converted into object
//console.log


const fs=require("fs")
const bioData={
    name:"kashaf",
    age:20,
    department:"Software dept"
}

const jsonData=JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log('done');
    
})


//read
fs.readFile("json1.json",utf-8,(err,data)=>{
    console.log(data);
    
})