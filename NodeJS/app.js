const { createServer } = require('http')
const { parse } = require('url')

const app = createServer()

let todoList = []

app.on("request", (request, response) => {
    const method = request.method
    const url = request.url
    const { pathname, query } = parse(url, true)

    if (method === "GET" && pathname === "/") {
        response.writeHead(200, { "Content-Type": "application/json" })
        return response.end(JSON.stringify(todoList))
    }
    if (method === "POST" && pathname === "/") {
        const task = query.task
        console.log(task);
        if (!task) {
            return response.end("Please provide a task")
        }
        todoList.unshift(task)
        return response.end(JSON.stringify({ status: "success", task }))
    }
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})