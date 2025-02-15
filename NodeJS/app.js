// Server nodejs

// core modules / build-in modules

// http

const http = require("http")
const url = require("url")

const server = http.createServer()

server.on("request", (request, response) => {
    
    const path = request.url
    const method = request.method

    const parsedUrl = url.parse(path, true)

    if (parsedUrl.pathname == "/") {
        if (method != "GET") {
            response.writeHead(405, { "content-type": "text/html" })
            return response.end("Method not allowed")
        }
        response.writeHead(200, { "content-type": "text/html" })
        return response.end("Home Page " + JSON.stringify(parsedUrl.query))
    }
    
    return response.end(path +" Not found")
})

// http methods
// GET => read
// POST => create
// PUT => replace
// PATCH => update    
// DELETE => delete
    

// 200 => OK
// 201 => Created

// 400 => Bad request
// 401 => Unauthorized
// 404 => Not found
// 405 => Method not allowed
// 409 => Conflict

// 500 => Internal server error

server.listen(8080, () => {
    console.log("Server: http://localhost:8080");
})


