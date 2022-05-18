const { createError } = require("./../../utils/error");
const Hotel = require("./../../models/hotels");
const Room = require("./../../models/rooms");
exports.searchHotels = async (req, res, next) => {
  try {
    const result = await Hotel.find({
      city: req.body.city,
      //   age: { $gt: 17, $lt: 66 },
    }).populate({
      path: "rooms",
      match: { maxPeople: { $gte: req.body.maxPeople } },
    });
    res.send(result);
  } catch (error) {}
};
