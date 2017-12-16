var http = require('http');
var express = require('express');
var bodyParser =require('body-parser');
 var  urlencodeParser = bodyParser.urlencoded({ extended:false })

var app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
       res.render("index");
});

app.use('/assets',express.static('stuff'));

app.get('/home',function(req,res){
       res.render("index");
});

app.get('/contact',function(req,res){
       console.log(req.query);
       res.render("contact",{qs:req.query});
})


app.post('/contact', urlencodeParser, function(req,res){
       console.log(req.body);
       res.render("contact-success",{data:req.body});
})

app.get('/profile/:id',function(req,res){
       res.send(`You requested to see a frofile of id of ${req.params.id}`);
});
app.get('/ejs/:id',function(req,res){
    var data = {age:20,job:'ninja',hobbies:['eating','fighting','fishing']}
   // res.send(data);
   res.render('profile',{person:req.params.id,data:data});
})



app.get('/index',function(req,res){
       res.sendFile(__dirname +'/index.html');
})

app.listen(3001);
console.log('now listing to port 3001');