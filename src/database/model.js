let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blockChainSchema  = new Schema({
  index:{
    type: Schema.Types.Number,
    require: true
  },
  timestamp:{
    type: Schema.Types.Date,
    require: true,
    default: Date.now()
  },
  transactions:{
    type: Schema.Types.Array,
    require: true
  },
  prevHash:{
    type: Schema.Types.String,
    require: true
  },
  hash: {
    type: Schema.Types.String,
    require: true
  }
});

module.exports = mongoose.model('BlockChain', blockChainSchema);
