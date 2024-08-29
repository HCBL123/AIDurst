const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Results = new Schema({
  copd: { type: Number },
  covid19: { type: Number },
  asthma: { type: Number },
  chart: { type: String },
  result: { type: String },
  sugg: { type: String },
});

module.exports = mongoose.model("Results", Results);
