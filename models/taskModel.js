const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
      required: [true, "please add projectid"],
    },
    taskTitle: {
      type: String,
      require: [true, "add title"],
    },
    assignTo: {
      type: mongoose.Schema.ObjectId,
      ref: "Team",
      required: [true, "please add teamid"],
    },
    status: {
      type: String,
      enum: ["in progress", "completed"],
      default: "in progress",
    },
    taskDesc: {
      type: String,
      default: "",
    },
    taskCost: {
      type: Number,
      default: 0,
    },
    dueDate: {
      type: String,
      required: [true, "put due date"],
    },
    dueTime: {
      type: String,
      default: "",
    },
    requiredPart: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
  }
);

taskSchema.pre(/^find/, function (next) {
  this.populate({
    path: "project",
    select: "make model",
  }).populate({
    path: "assignTo",
    select: "firstName lastName",
  });
  next();
});

module.exports = mongoose.model("Task", taskSchema);
