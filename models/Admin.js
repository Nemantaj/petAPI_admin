const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("Admin", adminSchema);
