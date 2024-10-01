const WebSocket = require('ws');
const { getLastBlock, getBlocks, addBlock } = require('../block/block');

const MessageType = {
    QUERY_LATEST: 0,
    QUERY_ALL: 1,
    RESPONSE_BLOCKCHAIN: 2
};

const sockets = [];

function connectP2PServer(port) {
    const url=`ws://localhost:${port}`;
    const ws=new WebSocket(url);
    initConnection(ws);
}

function initP2PServer(port) {
    const server = new WebSocket.Server({ port });
    server.on('connection', ws => initConnection(ws));
    console.log(`P2P Server listening on port: ${port}`);
}

function initConnection(ws) {
    sockets.push(ws);
    initMessageHandler(ws);
    initErrorHandler(ws);
}

function initMessageHandler(ws) {
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        switch (message.type) {
            case MessageType.QUERY_LATEST:
                write(ws, responseLatestMsg());
                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMsg());
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:
                handleBlockchainResponse(message.data);
                break;
            default:
                console.log('Unknown message type received');
        }
    });
}

function write(ws, message) {
    ws.send(JSON.stringify(message));
}

function broadcast(message) {
    sockets.forEach(socket => write(socket, message));
}

function responseLatestMsg() {
    return {
        type: MessageType.RESPONSE_BLOCKCHAIN,
        data: JSON.stringify([getLastBlock()])
    };
}

function responseAllMsg() {
    return {
        type: MessageType.RESPONSE_BLOCKCHAIN,
        data: JSON.stringify(getBlocks())
    };
}

function handleBlockchainResponse(blocks) {
    const receivedBlocks = JSON.parse(blocks);
    const latestReceivedBlock = receivedBlocks[receivedBlocks.length - 1];
    const currentLatestBlock = getLastBlock();

    if (latestReceivedBlock.index > currentLatestBlock.index) {
        console.log('Blockchain possibly behind. We got: ', currentLatestBlock.index, ' Peer got: ', latestReceivedBlock.index);
        if (currentLatestBlock.hash === latestReceivedBlock.previousHash) {
            console.log('Appending received block to our chain');
            if (addBlock(latestReceivedBlock)) {
                broadcast(responseLatestMsg());
            }
        } else {
            console.log('Querying the entire chain from our peer');
            broadcast({ type: MessageType.QUERY_ALL });
        }
    }
}

function initErrorHandler(ws) {
    ws.on('close', () => {
        sockets.splice(sockets.indexOf(ws), 1);
        console.log('Connection closed');
    });
    ws.on('error', () => {
        sockets.splice(sockets.indexOf(ws), 1);
        console.log('Connection failed');
    });
}

// 설정할 P2P 포트
const p2pPort = process.env.P2P_PORT || 7345;

// P2P 서버 초기화 및 실행
//initP2PServer(p2pPort);

module.exports = { connectP2PServer,initP2PServer };
