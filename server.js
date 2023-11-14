// Import necessary dependencies

// Express framework for building web applications
const express = require("express");
// CORS middleware for handling cross-origin resource sharing
const cors = require("cors");
// Create an Express application
const app = express();
// Set the port for the server to either the environment variable or 4000
const PORT = process.env.PORT || 4000;
// Import the routes for threads
const threadRoutes = require("./routes/threads-routes");

// Middleware setup for handling different types of requests

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(express.json());
const bodyParser = require("body-parser");
// Sending JSON data
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Use the threadRoutes at the "/api" base path
app.use("/api", threadRoutes);

// Define a simple endpoint to test if the server is running
app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
