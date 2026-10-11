const express = require('express')
const app=express();
app.get('/', function (req,res){
    res.send('Hello world')
})


app.get('/chicken',( req,res)=>{
    res.send('sure sir , i would love to serve the chicken')
})

app.get('/Idli',( req,res)=>{

    var customized_idli = {
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})

app.post('./items',(req,res)=>{
    console.log('data is  save');

})
app.listen(5050, () => {
    console.log("listening on port 5050");
});