module.exports = (mongoose) => {
	const UserInformation = mongoose.Schema(
		"userinformation",
		mongoose.Schema({
			id: String,
			firstname: String,
			lastname: String,
			email: String,
			profession: String,
			dateCreated: Date,
			country: String,
			city: String,
		})
	);
	return UserInformation;
};
