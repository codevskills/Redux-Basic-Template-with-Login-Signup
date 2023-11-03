const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("User", userSchema);

module.exports = userDataModel;
