const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const url = "mongodb+srv://Admin:Admin12!@cluster0.p2uqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(url, (err, client) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("numer albumu", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
          db.close();
        });
      });
  })

app.listen(3000, function() {
    console.log('listening on 3000')
  })
   app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')  })
 
  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/', (req, res) => {/*...*/})
  app.post('/quotes', (req, res) => {console.log(req.body)})