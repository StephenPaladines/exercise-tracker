const mongoose = require("mongoose"); // Object used for access to DB

const Schema = mongoose.Schema; // Schema object created

const userSchema = new Schema( // Define Schema
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema); // Finshed collection (table)

module.exports = User;
