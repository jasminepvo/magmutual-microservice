const moment = require("moment");

module.exports = {
	getIndex: (req, res) => {
		res.render("index.ejs");
	},
	// GET /user - Return a specific user (and all associated information)
	getUser: (req, res) => {},

	// GET /getAllUsersByDateRange - Return a list of users created between a date range
	getAllUsersByDateRange: (req, res) => {},

	// GET /getAllUsersByProfession - Return a list of users based on a specific profession
	getAllUsersByProfession: (req, res) => {},

	// GET /getAllUsersByCountry - Return a list of users based on a specific country
	getAllUsersByCountry: (req, res) => {},
};

//   getUser: (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     // Microservice.findById(id)
//     // 	.then((data) => {
//     // 		if (!data)
//     // 			res.status(404).send({ message: `No user found with id= ${id}` });
//     // 		else res.send(data);
//     // 	})
//     // 	.catch((err) => {
//     // 		res.status(500).send({ message: `Error retrieving user with id= ${id}` });
//     // 	});
//   },

//   // Return a list of users created between a date range
//   getAllUsersByDateRange: (req, res) => {
//     // const usersByDate = User.find({
//     //   id: { $gt: new Date("2020-01-01"), $lt: new Date("2022-01-01") },
//     // });
//   },

//   // Return a list of users based on a specific profession
//   getAllUsersByProfession: (req, res) => {
//     // async function run() {
//     //   try {
//     //     const worker = await User.find({ profession: "worker" })
//     //     console.log(worker)
//     //   } catch (e) {
//     //     console.log(e.message)
//     //   }
//     // }
//     // run()

//   // async function run() {
//     //   try {
//     //     const worker = await User.where("profession").equals("worker")
//     //     console.log(worker)
//     //   } catch (e) {
//     //     console.log(e.message)
//     //   }
//     // }
//     // run()

//   // Return a list of users based on a specific country
//   exports.getAllUsersByCountry: (req, res) => {

//   },
// };
