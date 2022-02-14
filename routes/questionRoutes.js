const express = require('express')
const { createQuestion, getAllQuestions } = require('./../controllers/questionController')
const router = express.Router();


router.route('/').get(getAllQuestions).post(createQuestion)


module.exports = router;
