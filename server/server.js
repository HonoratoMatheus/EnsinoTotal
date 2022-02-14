const dotenv = require('dotenv');
const express = require('express')
const mongoose = require('mongoose');
const app = require('./app')
const Question = require('./../models/questionModel')
const cors = require('cors')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB CONNECTION SUCCESSFUL!');
    })
    .catch((err) => {
        console.log(err)
    })

const port = process.env.port;
app.get('/', () => {
    console.log('FOUND')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
console.log(process.env.port)