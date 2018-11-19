const http = require('http');

let iterations = 10;
let timerEndTime = 15000;


function viewTimeInConsole() {
  let startTime = new Date().getTime();
  let timerIds = [];

  for (let i = 0; i <= iterations; i++) {
    let timerId = setInterval(() => {
      console.log(returnTime())
    }, 5000);
  }




  setTimeout(() => {
    clearInterval(timerId);
    return;
  }, timerTime)
}

function returnTime() {
    return new Date().toISOString();
}

http.createServer(function(request, response) {
    if (request.method == 'GET') {
        viewTimeInConsole();
    } else {
        console.log('request method is not supported, send GET request.');
    }
}).listen(8080);

