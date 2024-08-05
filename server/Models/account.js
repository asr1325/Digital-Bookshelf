const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    email:{
        type: String, 
        required: [true, "Email required"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "password required for registration"],
    },
    savedBooks:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book',
    },],
});

 const Account = mongoose.model('Account', accountSchema);


 module.exports = Account;