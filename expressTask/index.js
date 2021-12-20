const express = require('express');
const app = express()
const path = require('path');
const router = require('./routes/blog');
const port = 3000

app.use(express.static(path.join(__dirname, "sample")))

app.use('/', require(path.join(__dirname, 'routes/blog.js')))
app.listen(port, () => {
  console.log(`blog app listening at http://localhost:${port}`)
})
