var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('q17AnNoEx.html', { root: '.' })
});
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName + ' '+ req.body.email;
  
    res.send(name + ' Submitted Successfully! \n Payment sucessfull!! ');
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
