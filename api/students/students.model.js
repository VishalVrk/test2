const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentsSchema = new Schema({
    firstName :{
        type: String,
        unique : false,
        required : true
    },
    lastName : {
        type: String,
        unique : false,
        required : true
    },
    id :{
        type: String,
        unique : true,
        required : true
    }
}, {
    timestamps: true
});

module.exports = studentsSchema;
