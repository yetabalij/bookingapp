//const { createError } = require("./../../utils/error");
const Hotel = require("./../../models/hotels");
const Room = require("./../../models/rooms");

exports.searchHotels = async (req, res, next) => {
  try {
    const result = await Room.find({
      maxPeople: req.body.maxPeople,
    }).populate({
      path: "hotel",
      match: { city: { $eq: req.body.city } },
    });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.propertyType = async (req, res, next) => {
  try {
    const result = await Hotel.find({}).select("type");
    res.send(result);
  } catch (err) {
    next(err);
  }
};
