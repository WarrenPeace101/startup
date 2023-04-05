const { WebSocketServer } = require('ws');
const uuid = require('uuid');

class PeerProxy() {

    constructor(httpServer) {
        
        const wss = new WebSocketServer({ noServer: true });

        httpServer.on('upgrade', (request, socket, head) => {
            wss.handleUpgrade(request, socket, head, function done(ws) {
              wss.emit('connection', ws, request);
            });
          });

        let connections = [];

        

}
}