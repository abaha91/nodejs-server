const serverModule = function (params) {
  const http = require('http');

  let consoleTimeInterval = params.argv.interval;
  let timerEndTime = params.argv.timeout;

  startServer();

  function viewTimeInConsole(request, response) {
    let timerId = setInterval(() => {
      console.log(returnTime())
    }, consoleTimeInterval);

    setTimeout(() => {
      clearInterval(timerId);
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
      response.end('Текущая дата: ' + returnTime());
      return;
    }, timerEndTime)
  }

  function returnTime() {
    return new Date().toISOString();
  }

  function startServer() {
    http.createServer(function(request, response) {
      if (request.method == 'GET') {
        viewTimeInConsole(request, response);
      } else {
        console.log('request method is not supported, send GET request.');
      }
    }).listen(8080);
  };

};


module.exports = serverModule;


