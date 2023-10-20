const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Client",
    },
    valet: {
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
      idNumber: {
        type: String,
      },
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    regNo: {
      type: String,
    },
    vin: {
      type: String,
    },
    engNo: {
      type: String,
    },
    milleageIn: {
      type: String,
    },
    milleageOut: {
      type: String,
    },
    color: {
      type: String,
    },
    carYear: {
      type: String,
    },
    insurance: {
      type: String,
    },
    dateIn: {
      type: Date,
      default: Date.now(),
    },
    timeIn: {
      type: String,
    },
    status: {
      type: String,
      default: "In progress",
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    expectedDate: {
      type: Date,
    },
    roadTest: {
      type: String,
      default: "none",
    },
    towingDetails: {
      type: String,
    },
    insurance: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // required: true,
      // ref: "Client",
    },
    bookNotes: {
      type: String,
    },
    accident: {
      type: String,
    },
    workRequest: {
      type: String,
    },
    fuelRange: {
      type: String,
    },
    toggleStates: {
      wiper: { type: Boolean, default: false },
      mirrors: { type: Boolean, default: false },
      badge: { type: Boolean, default: false },
      spareWheel: { type: Boolean, default: false },
      doorLocks: { type: Boolean, default: false },
      fireExt: { type: Boolean, default: false },
      tankCap: { type: Boolean, default: false },
      tankLid: { type: Boolean, default: false },
      relay: { type: Boolean, default: false },
      horns: { type: Boolean, default: false },
      oilFilter: { type: Boolean, default: false },
      radCap: { type: Boolean, default: false },
      battMk: { type: Boolean, default: false },
      arielAuto: { type: Boolean, default: false },
      seatBelts: { type: Boolean, default: false },
      radioSpeaker: { type: Boolean, default: false },
      rearMirror: { type: Boolean, default: false },
      wSpanner: { type: Boolean, default: false },
      wTriangle: { type: Boolean, default: false },
      bootMats: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.pre(/^find/, function (next) {
  this.populate({
    path: "client",
    select: "name phone email address",
  });
  next();
});

// virtual populate
// userSchema.virtual("reviews", {
//   ref: "Review",
//   foreignField: "user",
//   localField: "_id",
// });

module.exports = mongoose.model("Project", projectSchema);
