// Server nodejs

// core modules / build-in modules

// http

const http = require("http")

const server = http.createServer()

server.on("request", (request, response) => {
    const path = request.url

    if (path == "/") {
        response.writeHead(200, { "content-type": "text/html" })
        return response.end("Home Page")
    }
    
    return response.end(path +" Not found")
})

// 200 => OK
// 201 => Created

// 400 => Bad request
// 401 => Unauthorized
// 404 => Not found
// 409 => Conflict

// 500 => Internal server error

server.listen(8080, () => {
    console.log("Server: http://localhost:8080");
})


