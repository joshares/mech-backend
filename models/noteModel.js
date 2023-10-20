const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "message can not be empty!"],
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      required: [true, "Receiver can not be empty!"],
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
  }
);

// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "client",
//     select: "name",
//   });
//   next();
// });

module.exports = mongoose.model("Note", noteSchema);
