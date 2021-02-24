const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create our express app
const app = express()

// database

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://uma-victor1:jhon3165869@quote-app.ba0sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// middleware
app.use(bodyParser.json())

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
})   