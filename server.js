require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const db = require('./db/connect');
const morgan = require('morgan');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const { globalErrorHandler } = require('./controllers/errorController');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/users', userRouter);

if (process.env.NODE_ENV === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}

app.all('*', (req, res, next) => {
	throw new Error(`${req.originalUrl} isn't a route in this api`, 404);
});

app.use(globalErrorHandler);

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
