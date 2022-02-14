const AppError = require('./../utils/appError')
const sendError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong',
        });
    }
}

const handleDuplicateFieldsDB = (err) => {
    const keyValue = err.keyValue;
    const message = `The following ${Object.keys(err.keyPattern)[0]} is already in use: ${keyValue[Object.keys(keyValue)[0]]}`
    return new AppError(message, 400)
}

const handleValidationError = (err) => {
    errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data: ${errors.join('. ')}`
    return new AppError(message, 400)
}

module.exports = (err, req, res, next) => {
    console.log('aaaa')
    console.log(err)
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
    let error = { ...err }
    if (err.name === 'CastError') error = handleCastErrorDB(error);
    if (err.code === 11000) {
        error = handleDuplicateFieldsDB(error)
    }
    if (err.name === 'ValidationError') error = handleValidationError(error);
    sendError(error, res)


}