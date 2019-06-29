import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import Card from "./mainArea";
import Jumbo from "./jumbo";
import "./main.js";
import CardForm from "./cardForm";
var count = 2;
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
    serialNo: 925029450,
    gunOwner: "John Johnson"
  })
);
console.log("Mining block 2: ");
gunChain.addBlock(
  new Block(2, "06/29/2019", {
    gunName: "H&K G36",
    serialNo: 3240202040,
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

  function AddingIt(event) {
    event.preventDefault();
    console.log("Mining block 3: ");

    var x = document.getElementById("frm1");
    var text = [];
    var i;
    for (i = 0; i < x.length; i++) {
      text[i] = x.elements[i].value;
    }
    count++;
    gunChain.addBlock(
      new Block(count, "06/29/2019", {
        gunName: text[2],
        serialNo: text[1],
        gunOwner: text[0]
      })
    );
    //alert(gunChain.getLatestBlock());
    alert(JSON.stringify(gunChain.getLatestBlock(), null, 4));
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
              <h5 class="card-title">See transactions for firearms</h5>
              <p class="card-text">Click below to see the blockchain</p>
              <button class="btn btn-primary" onClick={ActionLink}>
                Click Here
              </button>
            </div>
          </div>
          <br />

          <div class="card text-left">
            <h5 class="card-header">Add Transaction</h5>
            <div class="card-body">
              <h5 class="card-title">Add a transactions for a firearm</h5>
              <p class="card-text">Click below to see the results</p>
              <form id="frm1">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Unique Serial for Firearm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput3">Firearm Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                  />
                </div>
              </form>
              <button value="Submit" class="btn btn-primary" onClick={AddingIt}>
                Click Here
              </button>
            </div>
          </div>
          <br />
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
