const functions = require("firebase-functions");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Routes
const authRoutes = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());
app.use(cors({
  origin:'*',
}))

// Routes
app.use("/api", authRoutes);

// PORT
const port = 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

exports.auth = functions.https.onRequest(app);
