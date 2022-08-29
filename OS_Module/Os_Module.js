const os=require("os")
//version
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform())
console.log(os.tmpdir());
console.log(os.type())


//free memory
const freeMemory=os.freemem()
console.log(freeMemory);

//total memory
const total_mem=os.totalmem();
console.log(total_mem);

