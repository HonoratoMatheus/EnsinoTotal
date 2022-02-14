const Question = require('./../models/questionModel')


exports.getAllQuestions = async (req, res) => {
    try {
        console.log('getting questions')
        const allQuestions = await Question.find()
        res.status(200).json({
            status: 'success',
            results: allQuestions.length,
            data: {
                allQuestions
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = await Question.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                newQuestion
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}