const express = require("express");
const bodyParser = require("body-parser");
const { getLastBlock, getBlocks, nextBlock, addBlock } = require("../block/block");
const { initP2PServer, connectToPeers, broadcast, responseLatestMsg } = require("./p2pServer");

const http_port = 3001;  // 첫 번째 HTTP 서버 포트
const p2p_port = 6001;   // 첫 번째 P2P 서버 포트

const app = express();
app.use(bodyParser.json({ limit: '10mb' })); // 요청 본문 크기를 10MB로 제한
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.get("/blocks", (req, res) => {
    res.send(getBlocks());
});

app.post("/add-block", (req, res) => {
    const {
        faultChecklistId, createAt, sections, username, memberName, apartmentName, phoneNumber, apartmentBuildingNumber, reviewer, reviewComment, reviewCompletionTime, approvalStatus
    } = req.body;

    if (!faultChecklistId || !createAt || !sections || !username || !memberName || !apartmentName || !phoneNumber || !apartmentBuildingNumber || !reviewer || !reviewComment || !reviewCompletionTime || !approvalStatus) {
        return res.status(400).send("Missing required block data");
    }

    const newBlock = nextBlock({ faultChecklistId, createAt, sections, username, memberName, apartmentName, phoneNumber, apartmentBuildingNumber, reviewer, reviewComment, reviewCompletionTime, approvalStatus });
    if (addBlock(newBlock)) {
        broadcast(responseLatestMsg());  // 새로운 블록 추가 후 다른 노드에 전파
        res.status(201).send(newBlock);  // 성공적으로 블록이 추가됨
    } else {
        res.status(500).send("Failed to add block");
    }
});

// P2P 서버에 새로운 피어 추가
app.post("/add-peer", (req, res) => {
    connectToPeers(req.body.peer);  // 피어 연결
    res.send("Peer connected.");
});

// HTTP 서버 시작
app.listen(http_port, () => {
    console.log(`Listening HTTP on port ${http_port}`);
});

//요청자 블럭 검색
app.get("/find-blocks-by-username/:username", (req, res) => {
    const username = req.params.username;
    const userBlocks = getBlocks().filter(block => block.body.username === username).map(block=>block.body);
    res.send(userBlocks);
});

//아파트 이름으로 검색
app.get("/find-blocks-by-apartment-name/:apartmentName", (req, res) => {
    const apartmentName = req.params.apartmentName;
    const apartBlocks = getBlocks().filter(block => block.body.apartmentName === apartmentName).map(block=>block.body);
    res.send(apartBlocks);
});

// P2P 서버 시작
initP2PServer(p2p_port);