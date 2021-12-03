const express = require('express)
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const url = "mongodb+srv://Admin:Admin12!cluster0.p2uqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongodb = mongoClient.getDatabase("numer albumu");

MongoClient.connect(url, (err, client) => {
  MongoClient.connect(url, function(err, db) {
collectionNames = database.listCollectionNames();
  }
if (collectionNames.contains("numer albumu")) {    
    System.out.println("Collection exits...");
}
else {
    System.out.println("Collection doesn't exit, creating new...");
    db.createCollection("numer albumu", options)
}

app.listen(3000, function() {
    console.log('listening on 3000')
  })
   app.get('/' (req, res) => {
    res.sendFile(__dirname + '/index.html')  })
 
  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/', (req, res) => {/*...*/})
  app.post('/quotes', (req, res) => {console.log(req.body))