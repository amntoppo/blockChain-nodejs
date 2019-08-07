let mongoose = require('mongoose');
let blockChainModel = require('./model');

//connect to DB
//mongoose.connect('mongodb://127.0.0.1:27017/blockChain', { useNewUrlParser: true});
mongoose.connect('mongodb://127.0.0.1:27017/blockChain', { useNewUrlParser: true}, (err) => {
  if(err) {
    return console.log("Cannot connect to db");
  }
  console.log("Database connected");
  connectionCallback();
});

let connectionCallback = () => {};

module.exports.onConnect = (callback) => {
  connectionCallback = callback;
}
