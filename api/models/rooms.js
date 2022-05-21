const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    checkIn: {
      type: Date,
    },
    checkOut: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
