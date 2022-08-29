const { json } = require("stream/consumers");

//object
const BioData={
    name:"kashaf",
    age:20
}
console.log(BioData.name);


// object convert into string

const jsonData=JSON.stringify(BioData)


console.log(jsonData);

// console.log(jsonData.name) //error


//convert JSON into object
const objData=JSON.parse(jsonData)
console.log(objData);
