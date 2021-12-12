require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const db = require('./db/connect');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
	res.send({ message: 'Full Stack!' });
});

const PORT = process.env.SERVER_PORT || 3000;

const initServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server is listening at port : ${PORT}`);
		});
		await db();
	} catch (err) {
		return err;
	}
};

initServer();
