const { Schema,  model } = require('mongoose');
 
const schema = new Schema({
    name: {
        type: String,
        required: true,
		trim: true,
    },
    lastname: {
        type: String,
        required: true,
		trim: true,
    },
    email: {
        type: String,
        unique: true,
		required: true,
		trim: true,
    },
    phone: {
        type: String,
        trim: true,
        default: '',
    },
    password: {
        type: String,
        required: true,
		trim: true,
    },
}, { timestamps: true });

const Users = model('Users', schema)

module.exports = {
    Users
} 