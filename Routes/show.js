const express = require('express');

const router = express.Router();


router.post('/', (req , res)=>{

    console.log(req.body);

    res.send("<h1> Fuck you</h1>");

})

exports.router = router;