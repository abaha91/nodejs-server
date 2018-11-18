const http = require('http');

function sendResponse() {

}

http.createServer(function(request, response) {
    if (request.method == 'GET') {
        sendResponse();
    } else {
        console.log('request method is not supported, send GET request.');
    }
}).listen(8080);

