const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must provide a name'],
    },
    email: {
        type: String,
        required: [true, 'You must provide a email'],
    },
    password: {
        type: String,
        required: [true, 'You must provide a password'],
        minlength: 8,
        select: false,
    },
    photo: {
        type: String,
    },
    confirmPassword: {
        type: String,
        required: [true, 'You must confirm your password'],
        validate: {
            validator: function (el) {
                return this.password === el
            }, message: 'Passwords are not the same',
        }
    },
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

userSchema.methods.correctPassword = function (candidatePassword, userPassword) {
    return bcrypt.compare(candidatePassword, userPassword)
}
const User = mongoose.model('User', userSchema);
module.exports = User;