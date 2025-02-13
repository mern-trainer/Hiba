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

const os = require("os") // ES5
// import os from "os" // ES6

// console.log(os.platform());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.uptime());
// console.log(os.cpus());
// console.log(os.networkInterfaces());


const fs = require("fs") // file System - ES5
// import fs from "fs" // ES6

// fs.writeFile("index.txt", "Hello World", () => {
//     console.log("File Created") 
// })

// fs.readFile("index.txt", "utf-8", (error, content) => {
//     if (error) {
//         return console.log(error.message);
//     }
//     return console.log("Content: ",content);
// })
 
// fs.appendFile("index.txt", " Sample text", () => {
//     console.log("File Updated")    
// })

// fs.unlink("index.txt", (error) => {
//     if (error) {
//         return console.log(error.message)
//     }
//     return console.log("File Deleted")
// })

fs.rename("index.txt", "renamedIndex.txt", () => {
    // console.log("File Renamed");
})

// streams => chunks => readStream, writeStream

const readStream = fs.createReadStream("sample.txt", { encoding: "utf-8" }) // Buffer
const writeStream = fs.createWriteStream("result.txt", { encoding: "utf-8" })
// data, end, error

// readStream.on("data", (chunk) => {
//     writeStream.write(`CHUNK-START: ${chunk}`)
// })

readStream.pipe(writeStream)

readStream.on("error", (error) => {
    console.log(error.message);
})
 
readStream.on("end", () => {
    console.log("File Read Completed");
})

 


