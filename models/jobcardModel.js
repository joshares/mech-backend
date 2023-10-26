const mongoose = require("mongoose");

const jobCardSchema = mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
      required: [true, "please add projectid"],
    },
    client: {
      type: mongoose.Schema.ObjectId,
      ref: "Client",
      required: [true, "please add clientId"],
    },
    bodyReport: {
      type: String,
      default: "",
    },
    mechReport: {
      type: String,
      default: "",
    },
    electReport: {
      type: String,
      default: "",
    },
    approved: {
      type: String,
      default: "Not yet",
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
  }
);

jobCardSchema.pre(/^find/, function (next) {
  this.populate({
    path: "project",
    select: "client",
  });
  next();
});

module.exports = mongoose.model("JobCard", jobCardSchema);
