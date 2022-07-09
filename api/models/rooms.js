const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    name: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    maxNumber: {
      type: Number,
      required: true,
    },
    numberOfRooms: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    parking: {
      type: String,
      default: "No",
    },
    breakfast: {
      type: String,
      default: "No",
    },
    language: {
      type: String,
      default: "English",
    },
    freeWifi: {
      type: Boolean,
      default: false,
    },
    restaurant: {
      type: Boolean,
      default: false,
    },
    roomService: {
      type: Boolean,
      default: false,
    },
    frontDesk: {
      type: Boolean,
      default: false,
    },
    bar: {
      type: Boolean,
      default: false,
    },
    smoking: {
      type: Boolean,
      default: false,
    },
    spa: {
      type: Boolean,
      default: false,
    },
    hotTube: {
      type: Boolean,
      default: false,
    },
    airConditioning: {
      type: Boolean,
      default: false,
    },
    sauna: {
      type: Boolean,
      default: false,
    },
    isReserved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
