// Creating Database
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/EmployeeDB";

// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     console.log("Database Created");
//     db.close();
// });


// Creating Collection
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://0.0.0.0:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err)throw err;
//     var dbo = db.db("EmployeeDB");
//     dbo.createCollection("customer",function(err,res){
//         if(err)throw err;
//         console.log("collection created");
//         db.close();
//     });
// });


// Inserting
// var MongoClient = require('mongodb').MongoClient;
// var url= "mongodb://0.0.0.0:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err)throw err;
//     var dbo = db.db("EmployeeDB");
//     var mydb = {name:"Afo", address:"kerala"};
//     dbo.collection("customer").insertOne(mydb,function(err,res){
//         if(err)throw err;
//         console.log("1 document inserted");
//         db.close()
//     })
// })

// Updating
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://0.0.0.0:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err)throw err;
//     var dbo = db.db("EmployeeDB");
//     var mydb = {address:"delhi"}; 
//     var newdb = {$set:{name:"mike", address:"mumbai"}};
//     dbo.collection("customer").updateOne(mydb, newdb, function(err,res){
//         if(err)throw err;
//         console.log("1 record updated");
//         db.close();
//     });
// });

//Deleting
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err)throw err;
//     var dbo = db.db("EmployeeDB");
//     var mydb = {address:"mumbai"};
//     dbo.collection("customer").deleteOne(mydb,function(err,res){
//         if(err)throw err;
//         console.log("1 record deleted");
//         db.close();
//     });
// });

// Sort
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db("EmployeeDB");
    var mydb = {name:1};
    dbo.collection("customer").find().sort(mydb).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close();
    });
});