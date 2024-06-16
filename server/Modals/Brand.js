const mongoose = require('mongoose');

const Brand = mongoose.model("Brand",{
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,

    },
    date:{
        type:Date,
        default:Date.now(),
    },
    available:{
        type:Boolean,
        default:true,
    },

});


module.exports = Brand;