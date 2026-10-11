const express = require('express')
const app=express();
const db =require('./db');
app.get('/', function (req,res){
    res.send('Hello world')
})


app.listen(5050, () => {
    console.log("listening on port 5050");
});