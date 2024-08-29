const mongoose = require("mongoose");

//Connect to db
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/AIDurst_Doctor_dev");
    console.log("Success");
  } catch (error) {
    console.log("Error");
  }
}

module.exports = { connect };
