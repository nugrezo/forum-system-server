const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const threadRoutes = require("./routes/threads-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Assuming you're sending JSON data

app.use(cors());

// Use the threadRoutes at the "/api" base path
app.use("/api", threadRoutes);

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
