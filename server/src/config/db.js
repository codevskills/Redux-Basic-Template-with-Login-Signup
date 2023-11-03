const mongoose = require("mongoose");
require('dotenv').config({ path: '.env.development.local' });

/* Important Notes Use your Own MongoDB Url Here */
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Redux', // Specify the database name here
});

const db = mongoose.connection; // Get the mongoose connection object directly

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db; // Export the mongoose connection object