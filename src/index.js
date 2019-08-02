let Database = require('./database');
let BlockChain = require('./blockChain');

let hash = require('object-hash');

Database.onConnect(() => {


let blockChain = new BlockChain();

// let PROOF = 456;

// function validProof(proof) {
//     let guessHash = hash(proof);
//     console.log("Hashing: ", guessHash);
//     return guessHash == hash(PROOF);
// }
//
// function proofOfWork() {
//   let proof = 0;
//   while(true) {
//     if (!validProof(proof)) {
//       proof++;
//     }
//     else {
//       break;
//     }
//   }
//   return proof;
// }

// if(proofOfWork() == PROOF) {
//   blockChain.addNewTransaction("Aman", "Toppo", 500);
//   let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
//   blockChain.addnewBlock(prevHash);
// }

blockChain.addNewTransaction("Aman", "Toppo", 500);
blockChain.addnewBlock(null);

console.log("Chain ", blockChain.chain);
});
