const mongooose = require('mongoose');

const patientSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    maxLength:10,
    required: true,
    unique:true
  },
  doctor:{
    type:mongooose.Schema.Types.ObjectId,
    ref:'Doctor'
  }
},
  {
    timestamps: true,
  }

);

const Patient = mongooose.model('Patient', patientSchema);
module.exports = Patient;