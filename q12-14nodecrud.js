var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb2",
    port:3307
});

//Connection
con.connect(function(err){
    if(err)throw err;
    console.log("connected..");
    con.query("CREATE DATABASE mydb2",function(err,result){
        if(err)throw err;
        console.log("Database Created");
    });
});

// Create
 con.connect(function(err){
     if(err){
        return console.error('error: '+err.message);
     }
     console.log("Connected..");
     var sql= "CREATE TABLE customer(name VARCHAR(25), address VARCHAR(25))";
     con.query(sql,function(err,result){
         if(err)throw err;
         console.log("Table Created");
     });
 });

// Insert
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql= "INSERT INTO customer (name,address) VALUES ('ben','mumbai')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("1 value inserted");
    });
});

// Select
con.connect(function(err){
    if(err) throw err;
    console.log("Connected...");
    con.query("SELECT * FROM customer", function(err,result){
        if(err) throw err;
        console.log(result);
    });
});

//Update
con.connect(function(err){
    if(err)throw err;
    console.log("Connected");
    var sql = "UPDATE customer SET address='delhi' WHERE address='mumbai'";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result+"1 record updated");
    });
});

//Delete
con.connect(function(err){
    if(err)throw err;
    console.log("Connection Established");
    var sql="DELETE FROM customer WHERE address = 'delhi'";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("1 value deleted");
    })
})