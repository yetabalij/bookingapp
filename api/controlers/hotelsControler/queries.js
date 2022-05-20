//const { createError } = require("./../../utils/error");
const Hotel = require("./../../models/hotels");

exports.searchHotels = async (req, res, next) => {
  try {
    const result = await Hotel.find({
      city: req.body.city,
    }).populate("rooms");
    path: "rooms", res.send(result);
  } catch (err) {
    next(err);
  }
};
