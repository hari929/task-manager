const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('users', {
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    }
})

module.exports = User