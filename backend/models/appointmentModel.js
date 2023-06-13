const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  doctorInfo: {
    type: Object,
    required: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  userInfo: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
},
  {
    timestamps: true,
  })

module.exports = mongoose.model("Appointment", appointmentSchema);