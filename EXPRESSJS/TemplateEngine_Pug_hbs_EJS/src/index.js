const express=require("express")
const path=require("path")
const app=express()
const port=5000;

console.log(__dirname)

//if we change "views " folder name to "templates"(folder name)
const templatePath=path.join(__dirname,'../templates')


//to set theview engine
app.set("view engine","hbs");



//if we change "views " folder name  
app.set('views',templatePath)







//template engine route

app.get("/",(req,res)=>{
res.render("index");
})


//template file about.hbs route
//first argument is for request and 2nd argument is for response
app.get('/about',(req,response)=>{
    response.render('about')
})
app.listen(port,()=>{
console.log('listening at port '+port);

})
