function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Cookie Competition">
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Lato:wght@300&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
            <script src="https://kit.fontawesome.com/794b746eef.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./public/main.css">
            <title>The Cookie</title>
        </head>
            <header>
              <h1 class="header__title glow">The Cookie</h1>
                <nav class="navbar">
                  <a href="/" class="navbar__links" aria-label="the cookie">Cookie</a>
                  <a href="/crunch" class="navbar__links" aria-label="the cookie crunches">Crunch</a>
                </nav>
            </header>
        <body>
            <div class="container"> 
             ${bodyContent}
            </div>  
        </body>
    </html>
    `;
}

function home() {
  let cookieStr = `
  <div class="cookie">
    <div class="choco-chip left left--1"></div>
    <div class="choco-chip left left--2"></div>
    <div class="choco-chip center center--1"></div>
    <div class="choco-chip center center--2"></div>
    <div class="choco-chip center center--3"></div>
    <div class="choco-chip right right--1"></div>
    <div class="choco-chip right right--2"></div>
  </div>
  <section class="cookie__description"
    <p>
      Gregor, the CSS cookie is delicious.
      He comes with many lovely ingredients.
      Please check the dev-tools application tab 
      to see what he consists of.
    </p>
  </section>
  `;
  return sharedLayout(cookieStr);
}

function crunch() {
  let crunchCookieStr = `
  <h2 class="cookie__name">Gregor</h2>
  <div class="cookie">
    <div class="choco-chip left left--1"></div>
    <div class="choco-chip left left--2"></div>
    <div class="choco-chip center center--1"></div>
    <div class="choco-chip center center--2"></div>
    <div class="split"></div>
    <div class="choco-chip center center--3"></div>
    <div class="choco-chip right right--1"></div>
    <div class="choco-chip right right--2"></div>
  </div>
  <section class="cookie__description"
    <p>
      "....mmmmmm.....Yummy mummy"
    </p>
  </section>
  `;
  return sharedLayout(crunchCookieStr);
}

function missingPage() {
  return `
  <img class="missing-resource-image" src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif" alt="404 resource not found">
  `;
}

module.exports = { crunch, missingPage, home };
