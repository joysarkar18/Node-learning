const express = require('express');

const router = express.Router();


router.post('/', (req , res)=>{

    console.log(req.body);

    res.render("hoem")

})

exports.router = router;