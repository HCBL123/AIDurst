const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doctors = new Schema({
  name: { type: String },
  birthday: { type: String },
  description: { type: String },
  email: { type: String },
  number: { type: String },
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("Doctors", Doctors);
