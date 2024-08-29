const { default: mongoose } = require("mongoose");

module.exports = {
  // Exports multiple schemes to Object
  multipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },

  // Exports single scheme to Object
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
