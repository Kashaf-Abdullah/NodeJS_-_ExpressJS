const express=require("express")
const path=require("path")
const app=express()
const hbs=require("hbs")
const port=5000;

console.log(__dirname)


const staticPath=path.join(__dirname,'../public')
//if we change "views " folder name to "templates"(folder name)
const templatePath=path.join(__dirname,'../templates/views')
// For partials
const partialsPath=path.join(__dirname,'../templates/partials')

//to set theview engine
app.set("view engine","hbs");



//if we change "views " folder name  
app.set('views',templatePath)


hbs.registerPartials(partialsPath)






//template engine route

app.get("/",(req,res)=>{
res.render("index");
})


//template file about.hbs route
//first argument is for request and 2nd argument is for response
app.get('/about',(req,response)=>{


       
// domain.com/shoes?type=sneaker&sort=price_ascending

// ?  ==> query string start from here
// type ==> variable name or key
// sneakers==>value
// & parameter seperator


    // console.log(req.query);   //http://localhost:5000/about?name=kashaf  you will get {name:kashaf}
    // console.log(req.query.name);  //kashaf will show
    
    // to send data in about page
    response.render('about',{
        name:req.query.name
    })
})
app.listen(port,()=>{
console.log('listening at port '+port);

})
