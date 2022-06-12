const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distances: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  featured: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
