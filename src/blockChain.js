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
      let newBlock = blockChainModel(this.block);
      newBlock.save((err) => {
        if (err) {
          console.log(err);
          console.log("does not work");
          return;
        } else {
            console.log("works");
        }
      });
      this.chain.push(block);
    }
    console.log("After validator");



    // this.chain.push(block);
    this.current_transaction = [];
    return block;

  }
  addNewTransaction(sender, receiver, amount) {
    this.current_transaction.push({sender, receiver,amount});
    console.log("transaction addeD");
  }

  lastBlock() {
    return this.chain.slice(-1)[0];
    olk
  }

  isEmpty() {
    return this.chain.length == 0;
  }
}

module.exports = blockChain;
