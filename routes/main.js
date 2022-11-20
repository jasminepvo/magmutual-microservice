const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

router.get("/", dashboardController.getIndex);

// Return a specific user (and all associated information)
router.get("/user", dashboardController.getUser);

// Return a list of users created between a date range
router.get("/daterange", dashboardController.getAllUsersByDateRange);

// Return a list of users based on a specific profession
router.get("/profession", dashboardController.getAllUsersByProfession);

// Return a list of users based on a specific country
router.get("/country", dashboardController.getAllUsersByCountry);

module.exports = router;
