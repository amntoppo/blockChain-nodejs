let hash = require('object-hash');
let validator = require('./validator');
//let chalk = require('chalk');
let mongoose = require('mongoose');
let blockChainModel = mongoose.model("BlockChain");

const TARGET_HASH = hash(456);

class blockChain {

  constructor() {
    this.chain = [];
    this.current_transaction = [];
  }

  getLastBlock(callback) {
    //get last block from DB
    return blockChainModel.findOne({}, null, {sort : {_id: -1}, limit: 1 }, (err, block) => {
      if(err) return console.log("Error getting last block");
      return callback(block);
    });
  }

  addnewBlock(prevHash) {
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.current_transaction,
      prevHash: prevHash,
    };
    console.log("before validator");
    if(validator.proofOfWork() == TARGET_HASH) {
      console.log("validator");
      //save it to DB
      //let dbsave = 

      block.hash = hash(block);
      //get Last BLock
      this.getLastBlock((lastBlock) => {
        if(lastBlock) {
          block.prevHash = lastBlock.hash;
          console.log("last block available");

        }
        let newBlock = blockChainModel(this.block);
      newBlock.save((err) => {
        if (err) {
          console.log(err);
          //console.log("does not work");
          return;
        } else {
            console.log("saved to DB");
        }
      });
      this.chain.push(block);
      this.current_transaction = [];
      return block;
      });

     
        

     // });


      
    }
    console.log("After validator");



    // this.chain.push(block);
    

  }
  addNewTransaction(sender, receiver, amount) {
    this.current_transaction.push({sender, receiver,amount});
    console.log("transaction addeD");
  }

  lastBlock() {
    return this.chain.slice(-1)[0];
    
  }

  isEmpty() {
    return this.chain.length == 0;
  }
}

module.exports = blockChain;
