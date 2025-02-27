const logRequest = (request, response, next) => {
    const { method, url } = request
    const startTime = new Date().getTime()
    response.on("finish", () => {
        const endTime = new Date().getTime()
        console.log(`${method} ${url} ${endTime - startTime} --ms`);
    })
    next()
}

module.exports = logRequest