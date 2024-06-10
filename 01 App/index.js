// import the .env file
require('dotenv').config()

// import express js
const express = require('express')
const app = express()

// send 'Hello World' to localhost:{port}/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// send to localhost:{port}/twitter
app.get('/twitter', (req, res) => {
    res.send('New request sent successfully!')
})

// send to localhost:{port}/login
app.get('/login', (req, res) => {
    res.send('<h1>Login HERE>>><h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})