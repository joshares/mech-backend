const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname can not be empty!"],
    },
    lastName: {
      type: String,
      required: [true, "last name can not be empty!"],
    },
    phone: {
      type: String,
      required: [true, "phone can not be empty!"],
    },
    email: {
      type: String,
      required: [true, "email  can not be empty!"],
    },
    role: {
      type: String,
      enum: [
        "staff",
        "manager",
        "booking manager",
        "inventory manager",
        "owner",
      ],
      default: "staff",
    },
    type: {
      type: String,
      enum: ["full time", "part time", "subcontractor"],
      default: "part time",
    },
    status: {
      type: String,
      enum: ["active", "unavailable", "on leave"],
      default: "active",
    },
    balance: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
  // {
  //   toJSON: { virtuals: true },
  // }
);

// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "client",
//     select: "name",
//   });
//   next();
// });

module.exports = mongoose.model("Team", teamSchema);
