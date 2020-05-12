const express = require('express')
const app = express()
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const nodemon = require('nodemon')
const bodyParser = require('body-parser')
const patientRoutes = require('./routes/covidRoutes')
const Patient = require('./models/covidModel')

mongoose.connect('mongodb://localhost:27017/covid_patients',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log('connected');
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static('public'))
app.use('/', covidRoutes)
app.get('*',(req,res)=>{
    res.send('Error')
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
    
})