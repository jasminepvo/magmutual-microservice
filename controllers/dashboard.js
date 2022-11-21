const User = require("../models/User");

module.exports = {
	getIndex: (req, res) => {
		res.render("index.ejs");
	},

	// GET /user - Return a specific user (and all associated information)
	getUser: async (req, res) => {
		try {
			const user = await User.find({ id: req.params.id }).exec();
			res.json(user);
		} catch (err) {
			console.log(err);
		}
	},

	// GET /getAllUsersByDateRange - Return a list of users created between a date range
	getAllUsersByDateRange: async (req, res) => {
		try {
			const user = await User.find({
				dateCreated: {
					$gt: new Date(req.params.startdate),
					$lt: new Date(req.params.enddate),
				},
			}).toArray();
			res.json(user);
		} catch (err) {
			console.log(err);
		}
	},

	// GET /getAllUsersByProfession - Return a list of users based on a specific profession
	getAllUsersByProfession: async (req, res) => {
		try {
			const user = await User.find({
				profession: req.params.profession,
			});
			res.json(user);
		} catch (err) {}
	},

	// GET /getAllUsersByCountry - Return a list of users based on a specific country
	getAllUsersByCountry: async (req, res) => {
		try {
			const user = await User.find({
				country: req.params.country,
			});
			res.json(user);
		} catch (err) {
			console.log(err);
		}
	},
};
