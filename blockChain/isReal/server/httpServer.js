const express = require("express");
const bodyParser = require("body-parser");
const { getLastBlock, getBlocks, nextBlock, addBlock } = require("../block/block");
const { initP2PServer, connectToPeers,broadcast,responseLatestMsg } = require("./p2pServer");

const http_port = 3001;  // 첫 번째 HTTP 서버 포트
const p2p_port = 6001;   // 첫 번째 P2P 서버 포트

const app = express();
app.use(bodyParser.json());

app.get("/blocks", (req, res) => {
    res.send(getBlocks());
});

app.post("/addBlock", (req, res) => {
    const { apartinfo, fault, proofData, applicant, approver } = req.body;

    if (!apartinfo || !fault || !proofData || !applicant || !approver) {
        return res.status(400).send("Missing required block data");
    }

    const newBlock = nextBlock([apartinfo, fault, proofData, applicant, approver]);
    if (addBlock(newBlock)) {
        broadcast(responseLatestMsg());  // 새로운 블록 추가 후 다른 노드에 전파
        res.status(201).send(newBlock);  // 성공적으로 블록이 추가됨
    } else {
        res.status(500).send("Failed to add block");
    }
});

// P2P 서버에 새로운 피어 추가
app.post("/addPeer", (req, res) => {
    connectToPeers(req.body.peer);  // 피어 연결
    res.send("Peer connected.");
});

// HTTP 서버 시작
app.listen(http_port, () => {
    console.log(`Listening HTTP on port ${http_port}`);
});

// P2P 서버 시작
initP2PServer(p2p_port);
