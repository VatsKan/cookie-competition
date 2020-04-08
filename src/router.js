const homeHandler = require("./handlers/home.js");
const missingHandler = require("./handlers/missing.js");
const publicHandler = require("./handlers/public.js");
const crunchHandler = require("./handlers/crunch.js");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  //console.log({url, method})
  if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/crunch" && method === "GET") {
    crunchHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
