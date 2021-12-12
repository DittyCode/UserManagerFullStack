require('dotenv').config({ path: './../config/config.env' });
const mongoose = require('mongoose');

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

const initDB = async () => {
	try {
		await mongoose.connect(DB);
		console.log('Succesfully connected with DB');
	} catch (err) {
		return err;
	}
};

module.exports = initDB;
