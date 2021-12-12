const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'User name is required!'],
		trim: true,
	},
	surname: {
		type: String,
		required: [true, 'User surname is required!'],
		trim: true,
	},
	photo: String,
	age: {
		type: Number,
		default: 18,
		required: [true, 'User age is required!'],
	},
	sex: {
		type: String,
		enum: ['male', 'female'],
		default: 'male',
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
