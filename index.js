// const express = require('express');
// const app = express()
// const path = require('path');
// const port = 3000

// app.use(express.static(path.join(__dirname, "public")))

// app.get('/hello', (req, res) => {
//   res.send('Hellooo World!')
// })
// app.get('/contact', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'index.html'))
//     res.json({"Osama":12})
//   })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })



const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hellow osama");
   
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write("<form action='/submit' method='POST'><input name='data' /><input name='data2' /><button>Submit</button></form>");
        res.end();
    } else if (req.url === "/submit") {
        let data = "";
        req.on("public", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            fs.readFile(filePath, 'utf8', (err, oldData) => {
                const newData = oldData + "\n" + data;
                fs.writeFile(filePath, newData, () => {
                    console.log(filePath);
                });
            });
            
        });
        res.write("Data Received");
        res.end();
    }

});

server.listen(3000);