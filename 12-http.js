const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page")
  } else if (req.url === "/about") {
    res.end("welcome to the about page")
  } else {
    res.end(`
      <h1>OOPS!</h1>
      <p>We cant seem to find the page you're looking for</p>
      <a href="/">go back</a>
    `)
  }
})

server.listen(5001)
