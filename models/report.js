const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const reportSchema = new mongooose.Schema({
  doctor:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Doctor'
  },
  patient:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Patient'
  },
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Positive', 'Quarantine']
  },
  date: {
    type:Date,
    default:Date.now,
    required:true,
  }
}, {
  timestamps: true,
})

const Report = mongooose.model('Report', reportSchema);
module.exports = Report;