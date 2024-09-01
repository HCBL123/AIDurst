const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model cho ket qua benh nhan
const Results = new Schema({
  copd: { type: Number },
  covid19: { type: Number },
  asthma: { type: Number },
  chart: { type: String },
  result: { type: String },
  sugg: { type: String },
});

module.exports = mongoose.model("Results", Results);
