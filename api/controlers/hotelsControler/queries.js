const { createError } = require("./../../utils/error");
const Hotel = require("./../../models/hotels");
const Room = require("./../../models/rooms");
exports.searchHotels = async (req, res, next) => {
  try {
    const result = await Hotel.find({ city: req.body.city }).populate("rooms");
    res.send(result);
  } catch (error) {}
};
