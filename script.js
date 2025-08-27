import express from 'express'

const app = express()


// middleware
app.use(function(req,res,next){
    console.log("This is middleware");
    next();
})

app.use(function(req,res,next){
    console.log("This is middleware 2");
    next();
})



//routing....
//app.get(route, requestHandler)

app.get('/', function (req, res){
    res.send("Hello World");
})

app.get('/contact', function (req, res){
    res.send("Contact us page");
})

app.get('/about', function (req, res, next){
    // res.send("About us page");
    return next(new Error("Something went wrong"));
})


app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})