const User = require('./../models/userModel')

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        console.log(allUsers)
        res.status(200).json({
            status: 'success',
            data: {
                allUsers
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }

}

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}