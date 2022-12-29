const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});

// Encrypt Password
doctorSchema.pre("save",async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

// Sign JWT and return
doctorSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({id:this._id},'secret',{
        expiresIn:'120m'
    });
};

// here bcrypt library another function of checking the password entered with the passwrod in database
doctorSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };


const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;
