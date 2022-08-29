// in advance js it is IIFE

//module wrapper function
// that's why we can use require in the top of the file and at the end we write module.exports="xyz"
(function (exports,require,module,__filename,__dirname){
    //we will not write like this write line 7 and line 8
const name="kashaf"
console.log(name)
    
})

()//calling module wrapper function

const name="kashaf"
console.log(name)
console.log(__dirname);
console.log(exports);
console.log(require)
console.log(module);



    
    //inn nodejs al files are called module and all variable scope is private;
