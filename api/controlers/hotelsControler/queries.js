//const { createError } = require("./../../utils/error");
const { count, syncIndexes } = require("./../../models/hotels");
const Hotel = require("./../../models/hotels");
const Room = require("./../../models/rooms");

exports.searchHotels = async (req, res, next) => {
  try {
    const result = await Room.find({
      maxNumber: req.body.maxNumber,
    }).populate({
      path: "hotel",
      match: { city: { $eq: req.body.city.toLowerCase() } },
    });
    const newResult = [];
    result.map((res) => {
      if (res.hotel !== null && res.isReserved === false) newResult.push(res);
    });
    res.send(newResult);
  } catch (err) {
    next(err);
  }
};

exports.propertyType = async (req, res, next) => {
  let countAppartment = 0;
  let countResort = 0;
  let countVilla = 0;
  let countCabins = 0;
  let countCottage = 0;
  let countGlamping = 0;
  let countHotel = 0;
  let countGustHouse = 0;
  try {
    const result = await Hotel.find({}).select("type");
    result.map((res) => {
      const { type } = res;
      if (type === "appartment") {
        countAppartment += 1;
      } else if (type === "resort") {
        countResort += 1;
      } else if (type === "villa") {
        countVilla += 1;
      } else if (type === "cabins") {
        countCabins += 1;
      } else if (type === "cottage") {
        countCottage += 1;
      } else if (type === "glamping") {
        countGlamping += 1;
      } else if (type === "hotel") {
        countHotel += 1;
      } else if (type === "gust house") {
        countGustHouse += 1;
      }
      return res;
    });
    const resArray = {
      appartment: countAppartment,
      resort: countResort,
      villa: countVilla,
      cacabins: countCabins,
      cottage: countCottage,
      glamping: countGlamping,
      hotel: countHotel,
      gusthouse: countGustHouse,
    };
    //console.log(resArray);
    res.send(resArray);
  } catch (err) {
    next(err);
  }
};

exports.propertyByCity = async (req, res, next) => {
  let addis = 0;
  let nairobi = 0;
  let toronto = 0;
  let sydney = 0;
  let dubai = 0;
  try {
    const result = await Hotel.find();
    result.map((hotel) => {
      const { city } = hotel;
      if (city === "addis ababa") {
        addis += 1;
      } else if (city === "nairobi") {
        nairobi += 1;
      } else if (city === "toronto") {
        toronto += 1;
      } else if (city === "sydney") {
        sydney += 1;
      } else if (city === "dubai") {
        dubai += 1;
      }
    });
    const newResult = {
      addis: addis,
      nairobi: nairobi,
      toronto: toronto,
      sydney: sydney,
      dubai: dubai,
    };
    res.send(newResult);
  } catch (error) {
    next(error);
  }
};
