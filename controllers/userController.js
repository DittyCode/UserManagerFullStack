const catchAsyncHandler = require('./../utils/catchAsyncHandler');
const User = require('./../models/userModel');

// @route {{api}}
// @desc Get all users

exports.getAllUsers = catchAsyncHandler(async (req, res) => {
	const users = await User.find({});

	res.send({ message: 'Get all users', status: 'success', users });
});

// @route {{api}}
// @desc Create a new user

exports.createNewUser = catchAsyncHandler(async (req, res) => {
	const { name, surname, photo, age, sex } = req.body;
	const newUser = await User.create({
		name,
		surname,
		photo,
		age,
		sex,
	});
	res.send({ message: 'Create new user', status: 'success', newUser });
});
