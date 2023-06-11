const express = require('express');

const router = express.Router();

const Person = require("../models/person")
router.post('/add', (req, res) => {
    const person = new Person((Math.random() * 1000000).toString(), req.body.FirstName, req.body.LastName, req.body.Email)
    person.save();
    res.redirect("/")

})

router.get("/products/:productId", (req, res) => {
    console.log(req.params.productId);
    res.redirect("/");

})



exports.router = router;