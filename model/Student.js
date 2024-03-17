const mongoose = require('mongoose');
const schema = mongoose.Schema({
    id:Number,
    name:String,
    city:String,
    department:String,
    lab:Number
    }
);

module.exports = mongoose.model("Student",schema);