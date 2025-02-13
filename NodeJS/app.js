// JS => Front End
// NodeJS => Back End => JavaScript Runtime Environment. Google Chrome V8 Engine

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(1, 2));

// Package => NodeJS

// ES5, ES6

// import, export
// require(), module.exports

// Built-in or Core Module, Third-party Module

// fs, http, os, path, url, dns -> Built-in Modules
// nodemon, bcrypt, jsonwebtoken -> Third-party Modules

const os = require("os")

console.log(os.platform());
console.log(os.version());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.cpus());
console.log(os.networkInterfaces());


const fs = require("fs") // file System

fs.writeFile("index.txt", "Hello World", () => {
    console.log("File Created") 
})

fs.readFile("index.txt", "utf-8", (error, content) => {
    if (error) {
        return console.log(error.message);
    }
    return console.log("Content: ",content);
})
 
fs.appendFile("index.txt", " Sample text", () => {
    console.log("File Updated")    
})

fs.unlink("index.txt", (error) => {
    if (error) {
        return console.log(error.message)
    }
    return console.log("File Deleted") 
})