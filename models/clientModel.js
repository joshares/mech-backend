const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the  name "],
    },
    email: {
      type: String,
      required: [true, "please add  email address"],
    },
    phone: {
      type: String,
      required: [true, "please add phone number"],
    },
    address: {
      type: String,
      required: [true, "please add address"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "please add gender"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);
