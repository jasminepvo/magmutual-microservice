const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" });

// Enable cors
var corsOptions = {
	origin: "http://localhost:3002",
};
app.use(cors(corsOptions));

// Connect to the database
connectDB();

const hello = "Hello MagMutual";

// Set Routes
app.get("/", (req, res) => {
	res.json(hello);
});

// Set PORT, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
