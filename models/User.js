const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		profession: {
			type: String,
			required: true,
		},
		dateCreated: {
			type: Date,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
	}
	// { collection: "user" }
);

module.exports = mongoose.model("User", userSchema);
