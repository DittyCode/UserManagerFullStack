const catchAsyncHandler = require('./../utils/catchAsyncHandler');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsyncHandler(async (req, res) => {
	res.send({ message: 'HI!' });
});

exports.createNewUser = catchAsyncHandler(async (req, res) => {
	const newUser = await User.create(req.body);
	res.send({ message: 'HI!', newUser });
});
