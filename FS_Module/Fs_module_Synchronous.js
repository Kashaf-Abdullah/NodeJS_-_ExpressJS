console.log('hello');
const name='kashaf';
console.log(name);


//how to create new file
const fs =require("fs")//module

//file will create and welcome add in this file
fs.writeFileSync('read.txt',"welcome")


//now data override in this read.txt
fs.writeFileSync('read.txt',"to nodejs")


//append data in read.txt
fs.appendFileSync('read.txt','hello123')



//how to read file data

const buff_data=fs.readFileSync('read.txt')
// console.log(buff_data); //will give bffer data


//node js include an additional data type called buffer
//(not available in javascript browser)
//buffer is mainly used to store binary data
//while reading from a file or recieving packets over a network

const orig_data=buff_data.toString()
console.log(orig_data)