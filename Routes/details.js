const express = require('express');
const path = require('path')
const router = express.Router();


router.get('/form', (req , res)=>{
    res.render('index' , {name : "Please"});
    // res.sendFile(path.join(__dirname ,"../", 'Screens' , 'form.html'));

});

exports.router = router;