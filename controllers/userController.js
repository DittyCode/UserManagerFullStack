const catchAsyncHandler = require('express-async-handler');

exports.getAllUsers = catchAsyncHandler(async (req, res) => {
	res.send({ message: 'HI!' });
});
