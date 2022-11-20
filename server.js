const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" });
connectDB();
const mainRoutes = require("./routes/main");

// Set Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Set Routes
app.use("/", mainRoutes);

// Set PORT, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
