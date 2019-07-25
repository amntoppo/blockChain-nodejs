let hash = require('object-hash');
let validator = require('./validator');
let chalk = require('chalk');

const TARGET_HASH = 456;

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
    if(validator.proofOfWork == TARGET_HASH) {
      //save it to DB
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
    }



    this.hash = hash(block);
    this.chain.push(block);
    this.current_transaction = [];
    return block;

  }
  addNewTransaction(sender, receiver, amount) {
    this.current_transaction.push({sender, receiver,amount});////''''
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
