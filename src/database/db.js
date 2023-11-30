const mongoose = require('mongoose');
require('dotenv').config();

const mongooseHeader = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectDb = () => {
	return (
		mongoose.connect(process.env.MONGO_URI, mongooseHeader)
		)
};

module.exports = {
    connectDb
}