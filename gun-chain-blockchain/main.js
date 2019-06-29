
const SHA256 = require('crypto-js/sha256');


class Block
{
    constructor(index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain
{
    constructor()
    {
        this.chain = [this.createGenesisBlock];
    }

    createGenesisBlock()
    {
        return new Block(0, "06/29/2019", {name: "Genesis block"}, "0"); 
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock)
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let gunChain = new Blockchain();
gunChain.addBlock(new Block(1, "06/29/2019", { gunName: "Colt M1911", serialNo: 69, gunOwner: "John Johnson"}));
gunChain.addBlock(new Block(2, "06/29/2019", { gunName: "H&K G36", serialNo: 420, gunOwner: "Adam Adamson"}));
console.log(JSON.stringify(gunChain, null, 4));