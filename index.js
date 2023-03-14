let connection = require('./src/connection/connection')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const medicare = require('./src/medicalRouter/medicare')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(medicare)

app.get('/', function(req, res){
  res.send('Welcome to Ricky-Shiv-Meds backened >>>')
})

app.listen( process.env.PORT, async () => {
  connection.connectToServer( function( err, client ) {
    if (err) console.log(err);
  } );
  console.log(`app listening at http://localhost:` + process.env.PORT)
})
