const express = require('express');
const path = require('path')
const app = express();

const routerData = require('./Routes/details.js');
const showData = require('./Routes/show.js');
const Person = require("./models/person.js")

app.use(express.static(path.join(__dirname , "public")))
app.set('view engine' , 'hbs');
app.use(express.urlencoded({extended:false}))
app.use(routerData.router);
app.use(showData.router);
app.get("/" , (req , res)=>{
    items = Person.getAllItems();
    res.render("hoem" , {hasElement : items.length>0 , items : items});
})


app.listen(2000);

