exports.globalErrorHandler = (err, req, res, next) => {
	const { statusCode, status, message } = err;
	err.statusCode = statusCode || 500;
	err.status = status || 'fail';

	res.status(200).send({
		status,
		statusCode,
		message,
	});
};
