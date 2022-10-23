const http = require('http')
const path = require('path')
const fs = require('fs').promises
const port = 5000
const host = "localhost"

const server = http.createServer((request,response) => {
  response.setHeader('Content-Type' , 'text/html')
  switch(request.url){
    case './':
      response.writeHead(200)
    let ordPath = path.join(__dirname, 'index.html' )
    fs.readFile(ordPath, 'utf8', (err, data) => {
      response.end(data)
    })
    break

  case './home':
      response.writeHead(200)
    let homePath = path.join(__dirname, 'index.html' )
    fs.readFile(homePath, 'utf8', (err, data) => {
      response.end(data)
    })
    break

  case './about':
      response.writeHead(200)
    let aboutPath = path.join(__dirname, 'about.html' )
    fs.readFile(aboutPath, 'utf8', (err, data) => {
      response.end(data)
    })
    break

  case './contact':
      response.writeHead(200)
    let contactPath = path.join(__dirname, 'about.html' )
    fs.readFile(contactPath, 'utf8', (err, data) => {
      response.end(data)
    })
    break

    default: 
      // response.writeHead(404)
      // response.end(`
      //   <html>
      //     <body>
      //     <h1>Error 404</h1>
      //       <p>Page Not Found</p>
      //       <a href = "index.html">Home</a>
      //     </body>
      //   </html>
      // `)
      response.writeHead(200)
    let defaultPath = path.join(__dirname, 'index.html' )
    fs.readFile(defaultPath, 'utf8', (err, data) => {
      response.end(data)
    })
  }
})

server.listen(port, () => {
  console.log("server")
})