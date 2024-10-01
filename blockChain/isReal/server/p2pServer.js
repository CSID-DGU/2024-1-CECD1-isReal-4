const webSocket = require("ws");
const { getLastBlock, getBlocks, addBlock, createHash, Blocks } = require("../block/block");

let sockets = [];

// P2P 서버 초기화
function initP2PServer(p2p_port) {
    const server = new webSocket.Server({ port: p2p_port });
    server.on("connection", (ws) => {
        initConnection(ws);
    });
    console.log(`Listening P2P websocket port on: ${p2p_port}`);
}

function initConnection(ws) {
    sockets.push(ws);
    initMessageHandler(ws);
    initErrorHandler(ws);
    // 연결된 노드에게 최신 블록 요청
    write(ws, queryLatestMsg());
}

function write(ws, message) {
    ws.send(JSON.stringify(message));
}

function broadcast(message) {
    sockets.forEach((socket) => {
        write(socket, message);
    });
}

const MessageType = {
    QUERY_LATEST: 0,
    QUERY_ALL: 1,
    RESPONSE_BLOCKCHAIN: 2,
};

function initMessageHandler(ws) {
    ws.on("message", (data) => {
        const message = JSON.parse(data);
        switch (message.type) {
            case MessageType.QUERY_LATEST:
                write(ws, responseLatestMsg());
                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMsg());
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:
                handleBlockchainResponse(message);
                break;
            default:
                break;
        }
    });
}

function responseLatestMsg() {
    return {
        type: MessageType.RESPONSE_BLOCKCHAIN,
        data: JSON.stringify([getLastBlock()]),
    };
}

function responseAllMsg() {
    return {
        type: MessageType.RESPONSE_BLOCKCHAIN,
        data: JSON.stringify(getBlocks()),
    };
}

// 새로운 블록체인 데이터를 수신했을 때 처리
function handleBlockchainResponse(message) {
    const receivedBlocks = JSON.parse(message.data);
    const latestReceivedBlock = receivedBlocks[receivedBlocks.length - 1];
    const lastBlock = getLastBlock();

    if (latestReceivedBlock.header.index > lastBlock.header.index) {
        if (createHash(lastBlock) === latestReceivedBlock.header.previousBlockHash) {
            if (addBlock(latestReceivedBlock)) {
                broadcast(responseLatestMsg());
            } else {
                console.log("Failed to add block");
            }
        } else if (receivedBlocks.length === 1) {
            broadcast(queryAllMsg()); // 전체 블록 요청
        } else {
            replaceChain(receivedBlocks); // 체인 교체
        }
    } else {
        console.log("Received block is invalid.");
    }
}

// 새로운 체인이 유효한지 확인하고, 유효하면 체인을 교체
function replaceChain(newBlocks) {
    if (isValidChain(newBlocks) && newBlocks.length > getBlocks().length) {
        console.log("Received blockchain is valid. Replacing current blockchain with received blockchain.");
        Blocks = newBlocks; // 블록체인 교체
        broadcast(responseLatestMsg()); // 새로운 블록체인을 브로드캐스트
    } else {
        console.log("Received blockchain invalid or shorter than current blockchain.");
    }
}

// 체인이 유효한지 확인
function isValidChain(blocks) {
    if(blocks.length===0||getBlocks().length===0) return true;
    
    if (JSON.stringify(blocks[0]) !== JSON.stringify(getBlocks()[0])) {
        console.log("GenesisBlock is not Equal")
        return false; // 제네시스 블록이 같아야 함
    }

    for (let i = 1; i < blocks.length; i++) {
        const currentBlock = blocks[i];
        const previousBlock = blocks[i - 1];

        if (currentBlock.header.previousBlockHash !== createHash(previousBlock)) {
            return false; // 이전 블록 해시와 현재 블록의 이전 해시가 같아야 함
        }
    }
    return true;
}

function queryLatestMsg() {
    return {
        type: MessageType.QUERY_LATEST,
        data: null,
    };
}

function queryAllMsg() {
    return {
        type: MessageType.QUERY_ALL,
        data: null,
    };
}

function initErrorHandler(ws) {
    ws.on("close", () => {
        closeConnection(ws);
    });
    ws.on("error", () => {
        closeConnection(ws);
    });
}

function closeConnection(ws) {
    console.log("Connection closed");
    sockets.splice(sockets.indexOf(ws), 1);
}

// P2P 서버 간 연결을 추가하는 함수
function connectToPeers(newPeer) {
    const ws = new webSocket(newPeer);
    ws.on("open", () => {
        initConnection(ws);
    });
    ws.on("error", () => {
        console.log("Connection failed");
    });
}

module.exports = { initP2PServer, connectToPeers, broadcast,responseLatestMsg };
