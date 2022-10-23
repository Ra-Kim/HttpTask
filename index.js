const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 5000
const host = "localhost"

const server = http.createServer((request,response) => {
  response.setHeader('Content-Type', 'text/html')
  switch(request.url){
    case '/':
      response.writeHead(200)
    let ordPath = path.join(__dirname, 'public', 'index.html' )
    fs.readFile(ordPath, 'utf8', (err, data) => {
      try{response.end(data)}catch{console.error(err)}
    })
    break

    case '/home':
      response.writeHead(200)
    let homePath = path.join(__dirname, 'public', 'index.html' )
    fs.readFile(homePath, 'utf8', (err, data) => {
      try {response.end(data)} catch {console.error(err)}
    })
    break

    case '/about':
      response.writeHead(200)
    let aboutPath = path.join(__dirname, 'public', 'about.html' )
    fs.readFile(aboutPath, 'utf8', (err, data) => {
      try{response.end(data)}catch{console.error(err)}
    })
    break

    case '/contact':
      response.writeHead(200)
    let contactPath = path.join(__dirname, 'public', 'contact.html' )
    fs.readFile(contactPath, 'utf8', (err, data) => {
      try{response.end(data)}catch{console.error(err)}
    })
    break

    default: 
      response.writeHead(404)
      response.end(`
        <html>
          <body>
          <h1>Error 404</h1>
            <p>Page Not Found</p>
            <a href = "home">Home</a>
          </body>
        </html>
      `)
  }
})

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`)
})
