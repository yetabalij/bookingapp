const { response } = require("express");
const Hotel = require("./../../models/hotels");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dpy3euo56",
  api_key: "485554254842889",
  api_secret: "Hxa7JkR3L5TimiBIrZ2NzaQRKpU",
});

//CREATE
exports.createHotel = async (req, res, next) => {
  // const newHotel = new Hotel(req.body);
  // const {
  //   partner,
  //   name,
  //   type,
  //   city,
  //   address,
  //   distances,
  //   photos,
  //   title,
  //   desc,
  //   cheapestPrice,
  // } = newHotel;

  try {
    const photoResponse = await cloudinary.uploader.upload(req.body.photos[0], {
      upload_preset: "unsigned",
    });
    console.log(photoResponse.url);
    //const savedHotel = await newHotel.save();
    const savedHotel = await save({
      partner: req.body.partner,
      name: req.body.name,
      type: req.body.type,
      city: req.body.city,
      address: req.body.address,
      distance: req.body.distance,
      photos: photoResponse.url,
      title: req.body.title,
      desc: req.body.desc,
      cheapestPrice: req.body.cheapestPrice,
    });
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//UPDATE
exports.updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

//DELETE
exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//GET
exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//GET ALL HOTELS
exports.getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
