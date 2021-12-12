require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const db = require('./db/connect');
const morgan = require('morgan');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors());

app.use('/api/v1/users', userRouter);

if (process.env.NODE_ENV === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}

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
