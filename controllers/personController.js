const getPerson =  (req , res)=>{
    res.render('index' , {name : "Please"});
    // res.sendFile(path.join(__dirname ,"../", 'Screens' , 'form.html'));

}


exports.getPerson = getPerson;