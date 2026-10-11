const mongoose = require('mongoose');

//define the person schenme 

const personSchema =new mongoose.Schema({
    name: {
        type:String,
        required:true

    }
})