const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Hospital-API', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting to db"));
db.once('open',function(){
    console.log('Connected to databse :: MongoDB');
});

module.exports = db;