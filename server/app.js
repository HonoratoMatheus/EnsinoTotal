const express = require('express')
const globalErrorHandler = require('./../controllers/errorController')
const questionRoutes = require('./../routes/questionRoutes');
const userRoutes = require('./../routes/userRoutes')
const axios = require('axios')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/api/v1/question', questionRoutes);
app.use('/api/v1/user', userRoutes)

app.use(globalErrorHandler)

module.exports = app

