exports.globalErrorHandler = (err, req, res, next) => {
	console.log(err);
	const { statusCode = 500, status = 'fail', message } = err;

	res.status(statusCode).send({
		status,
		statusCode,
		message,
	});
	next();
};
