const fs = require('fs');
const merkle = require('merkle');
const cryptojs = require('crypto-js');

let Blocks = [];

class Block {
    constructor(header, body) {
        this.header = header;
        this.body = body;
    }
}

class BlockHeader {
    constructor(version, previousBlockHash, timestamp, merkleRoot, index, difficulty) {
        this.version = version;
        this.previousBlockHash = previousBlockHash;
        this.merkleRoot = merkleRoot;
        this.timestamp = timestamp;
        this.index = index;
        this.difficulty = difficulty;
    }
}

class BlockBody {
    constructor(aprtinfo, fault, proofData, applicant, approver){
        this.aprtinfo=aprtinfo;
        this.fault=fault;
        this.proofData=proofData;
        this.applicant=applicant;
        this.approver=approver;
    }
}

function getVersion() {
    const package = fs.readFileSync("package.json");
    return JSON.parse(package).version;
}

function createGenesisBlock() {
    const version = getVersion();
    const previousBlockHash = '0'.repeat(64);
    //const timestamp = parseInt(Date.now() / 1000);
    const timestamp = 10000;
    const bodyData = new BlockBody("apartInfo","Fault","ProofData","Applicant","Approver");
    const body = [JSON.stringify(bodyData)];
    const tree = merkle('sha256').sync(body);
    const merkleRoot = tree.root() || '0'.repeat(64);
    const index = 0;
    const difficulty = 0;

    const header = new BlockHeader(version, previousBlockHash, timestamp, merkleRoot, index, difficulty);
    return new Block(header, bodyData);
}

function createHash(block) {
    const {
        version,
        previousBlockHash,
        timestamp,
        merkleRoot,
        index,
        difficulty
    } = block.header;
    const blockString = version + previousBlockHash + timestamp + merkleRoot + index + difficulty;
    return cryptojs.SHA256(blockString).toString();
}

function getBlocks() {
    return Blocks;
}

function getLastBlock() {
    return Blocks[Blocks.length - 1];
}

function nextBlock(newData) {
    const prevBlock = getLastBlock();
    const version = getVersion();
    const index = prevBlock.header.index + 1;
    const previousBlockHash = createHash(prevBlock);
    const bodyData = new BlockBody(newData[0], newData[1], newData[2], newData[3], newData[4]);
    const body = [JSON.stringify(bodyData)];
    const tree = merkle("sha256").sync(body);
    const merkleRoot = tree.root() || '0'.repeat(64);
    const timestamp = parseInt(Date.now() / 1000);
    const difficulty = 0;

    const header = new BlockHeader(version, previousBlockHash, timestamp, merkleRoot, index, difficulty);
    return new Block(header, bodyData);
}

function addBlock(newBlock) {
    if (isvalidNewBlock(newBlock, getLastBlock())) {
        Blocks.push(newBlock);
        return true;
    }
    return false;
}

function isValidBlockStructure(block) {
    return (
        (typeof block.header.version === "string") &&
        (typeof block.header.previousBlockHash === "string") &&
        (typeof block.header.merkleRoot === "string") &&
        (typeof block.header.timestamp === "number") &&
        (typeof block.header.index === "number") &&
        (typeof block.header.difficulty === "number")&&
        (typeof block.body.aprtinfo =="string")&&
        (typeof block.body.fault =="string")&&
        (typeof block.body.proofData =="string")&&
        (typeof block.body.applicant =="string")&&
        (typeof block.body.approver =="string")
    );
}

function isvalidNewBlock(newBlock, prevBlock) {
    if (!isValidBlockStructure(newBlock)) {
        console.log("Invalid Block Structure");
        return false;
    } else if (newBlock.header.index !== prevBlock.header.index + 1) {
        console.log("Invalid Index");
        return false;
    } else if (newBlock.header.previousBlockHash !== createHash(prevBlock)) {
        console.log("Invalid Previous Block Hash");
        return false;
    } else if (
        (newBlock.body.length === 0 && "0".repeat(64) !== newBlock.header.merkleRoot) ||
        (newBlock.body.length !== 0 && merkle("sha256").sync([JSON.stringify(newBlock.body)]).root() !== newBlock.header.merkleRoot)
    ) {
        console.log("Invalid Merkle Root");
        return false;
    } else if (!isValidTimestamp(newBlock, prevBlock)) {
        console.log("Invalid Timestamp");
        return false;
    } else if (!hashMatchesDifficulty(createHash(newBlock), newBlock.header.difficulty)) {
        console.log("Invalid Difficulty");
        return false;
    }
    return true;
}

function getCurrentTimestamp() {
    return Math.round(Date.now() / 1000);
}

function isValidTimestamp(newBlock, prevBlock) {
    if (newBlock.header.timestamp - prevBlock.header.timestamp < 0) {
        return false;
    }

    if (getCurrentTimestamp() < newBlock.header.timestamp) {
        return false;
    }

    return true;
}

function hashMatchesDifficulty(hash, difficulty) {
    const requiredPrefix = "0".repeat(difficulty);
    return hash.startsWith(requiredPrefix);
}

const genesisBlock=createGenesisBlock();
Blocks = [genesisBlock];

module.exports={getBlocks,Blocks,nextBlock,addBlock,getLastBlock,createHash}