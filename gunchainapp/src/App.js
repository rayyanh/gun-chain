import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import Card from "./mainArea";
import Jumbo from "./jumbo";
import "./main.js";
import CardForm from "./cardForm";

const imgSize = {
  width: "75px",
  height: "auto"
};

//BLOCK
const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mined: " + this.hash);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock];
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return new Block(0, "06/29/2019", { name: "Genesis block" }, "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    //newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }

      return true;
    }
  }
}

let gunChain = new Blockchain();
console.log("Mining block 1: ");
gunChain.addBlock(
  new Block(1, "06/29/2019", {
    gunName: "Colt M1911",
    serialNo: 69,
    gunOwner: "John Johnson"
  })
);
console.log("Mining block 2: ");
gunChain.addBlock(
  new Block(2, "06/29/2019", {
    gunName: "H&K G36",
    serialNo: 420,
    gunOwner: "Adam Adamson"
  })
);

console.log(JSON.stringify(gunChain, null, 4));
//
function App() {
  function ActionLink(e) {
    e.preventDefault();
    alert(JSON.stringify(gunChain, null, 4));
  }
  return (
    <div className="App navColoor">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src="./gunchainlogo.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            style={imgSize}
          />
        </a>
        <a className="navbar-brand" href="#">
          Project GunChain
        </a>
      </nav>
      <div>
        <div className="container">
          <br />
          <Jumbo />
          <div class="card text-left">
            <h5 class="card-header">View Blockchain</h5>
            <div class="card-body">
              <h5 class="card-title">See transactions for guns</h5>
              <p class="card-text">Click below to see the blockchain</p>
              <button class="btn btn-primary" onClick={ActionLink}>
                Click Here
              </button>
            </div>
          </div>
          <br />
          <CardForm
            title="Add Transaction"
            head="Add a transactions for a gun"
            info="Click below to see the results"
          />
          <br />
          <Card
            title="See Latest Transaction"
            head="Grab the latest transaction from the blockchain"
            info="Click below to view"
          />
        </div>
      </div>
      <br />
      <div>
        <footer className="footer mt-auto py-3 navColoor">
          <div className="container">
            <span className="text-white">Copyright GunChain 2019</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
