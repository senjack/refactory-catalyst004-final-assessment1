const express = require('express')
const router = express.Router();
const path = require('path')
const Patient = require('../models/patientModel')
router.get('/covid',(req,res)=>{
    res.render('index')
})
router.post('/covid', async (req, res) => {
    try {
       var newPatient = new Patient(req.body)
        await newPatient.save()
        res.redirect('/covid')
    } catch (error) {
       console.log(error);
        res.status(404).send('unable to send to the database')
    }
 }
)
router.get('/patients', async(req, res) => {
    var userlist = await Patient.find()
    res.render('patients', {patients:userlist})
})
module.exports = router