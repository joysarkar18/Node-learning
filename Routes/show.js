const express = require('express');

const router = express.Router();

const Person = require("../models/person")
router.post('/add', (req, res) => {
    const person = new Person((Math.random() * 1000000).toString(), req.body.FirstName, req.body.LastName, req.body.Email, req.body.imgUrl)
    person.save();
    res.redirect("/")

})

router.get("/products/:productId", (req, res) => {
    const persons = Person.getAllItems();
    const pr = persons.find(p => p.id === req.params.productId);
    console.log(pr);
    res.render("details", { name: pr.firstName + " " + pr.lastName, imgUrl: pr.imgUrl })
    // res.redirect("/");

})



exports.router = router;