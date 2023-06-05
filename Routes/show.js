const express = require('express');

const router = express.Router();

const Person = require("../models/person")
router.post('/add', (req , res)=>{
    const person = new Person( "123" , req.body.FirstName , req.body.LastName , req.body.Email)
    person.save();
    res.redirect("/")

})

exports.router = router;