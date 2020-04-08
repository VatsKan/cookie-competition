const templates = require("../template");

function crunchHandler(request, response) {
  response.writeHead(200, {'text-content': 'text/html',
  "Set-Cookie": ["choco-chip=true", "flour=a tad", "yummy=Oh-Yes!"]
});
  response.end(templates.crunch()); 
}

module.exports = crunchHandler;
