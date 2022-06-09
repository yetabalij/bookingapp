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
  let appartmentCounter = 0;
  try {
    const result = await Hotel.find({}).select("type");
    result.map((result) => {
      if (result.type === "appartment") {
        appartmentCounter += 1;
      }
      console.log({ appartment: appartmentCounter });
      console.log(result);
      return result;
    });
    res.send(result);
  } catch (err) {
    next(err);
  }
};
