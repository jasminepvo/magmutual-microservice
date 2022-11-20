module.exports = (app) => {
	const microserviceController = require("../controllers/microservice.js");

	var router = require("express").Router();

	// Return a specific user (and all associated information)
	router.get("/user", microserviceController.getUser);

	// Return a list of users created between a date range
	router.get("/daterange", microserviceController.getAllUsersByDateRange);
	// Return a list of users based on a specific profession
	router.get("/profession", microserviceController.getAllUsersByProfession);

	// Return a list of users based on a specific country
	router.get("/country", microserviceController.getAllUsersByCountry);

	app.use("./api/microserviceController", router);
};
