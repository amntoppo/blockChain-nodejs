let hash = require('object-hash');

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
    this.hash = hash(block);
    this.chain.push(block);
    this.current_transaction = [];
    return block;

  }
  addNewTransaction(sender, receiver, amount) {
    this.current_transaction.push({sender, receiver,amount});
  }

  lastBlock() {
    return this.chain.slice(-1)[0];
  }

  isEmpty() {
    return this.chain.length == 0;
  }
}

module.exports = blockChain;
