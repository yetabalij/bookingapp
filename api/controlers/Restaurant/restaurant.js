const Rooms = require("./../../models/rooms");

//GET RESTAURANTS WITH PAGINATION
exports.getRestaurants = async (req, res, next) => {
  const totalRooms = await Rooms.find({ restaurant: true }).countDocuments({});
  const PageSize = 3;
  const page = parseInt(req.query.page || "0");
  const Restaurants = await Rooms.find({ restaurant: true })
    .limit(PageSize)
    .skip(PageSize * page)
    .populate({
      path: "hotel",
    });
  res.status(200).json({
    Restaurants,
    totalPages: Math.ceil(totalRooms / PageSize),
  });
};

//GET BAR WITH PAGINATION
exports.getRestaurants = async (req, res, next) => {
  const totalRooms = await Rooms.find({ bar: true }).countDocuments({});
  const PageSize = 10;
  const page = parseInt(req.query.page || "0");
  const Bar = await Rooms.find({ bar: true })
    .limit(PageSize)
    .skip(PageSize * page)
    .populate({
      path: "hotel",
    });
  res.status(200).json({
    Bar,
    totalPages: Math.ceil(totalRooms / PageSize),
  });
};
