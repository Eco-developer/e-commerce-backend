const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (userData, expiresIn="30min") => {
	const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn });
	return token;
}

module.exports = {
    createToken,
}