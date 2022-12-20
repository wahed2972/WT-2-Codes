const http = require('http');

const port = process.env.PORT || 3000;   // the port is used to store the port number on which server is running 

const server = http.createServer((req, res) =>{
    //console.log(req) //used to get all the information present in req
    console.log(req.url) // used to get specefic information
    res.statusCode = 200;  // status code 200 means everything is 'ok'
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> WELCOME </h1> <p> Hello World!! </p>');
})

server.listen(port, ()=>{
    console.log(`server is listining on port ${port}`);
});