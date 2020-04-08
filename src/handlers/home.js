const templates = require("../template");

function homeHandler(request, response) {
  response.writeHead(200, {'text-content': 'text/html',
    "Set-Cookie": ["choco-chip=true", "flour=unlikely", "yummy=?"]});
  response.end(templates.home()); 
}

module.exports = homeHandler;
