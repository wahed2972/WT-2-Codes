var express= require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.sendFile('q16ex.html',{root:'.'})
});
app.post('/submit',function(req,res){
    var name = req.body.firstname + '' + req.body.lastname + '' + req.body.email;
    res.send(name +'Submitted');
});
var server= app.listen(4000,function(){
   console.log("Server is running");
});