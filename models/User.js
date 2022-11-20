const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	id: String,
	firstname: String,
	lastname: String,
	email: String,
	profession: String,
	dateCreated: Date,
	country: String,
	city: String,
});

module.exports = mongoose.model("User", userSchema);
