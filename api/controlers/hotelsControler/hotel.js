const { trace } = require("../../routes/hotels");
const Hotel = require("./../../models/hotels");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dpy3euo56",
  api_key: "485554254842889",
  api_secret: "Hxa7JkR3L5TimiBIrZ2NzaQRKpU",
});

//CREATE
exports.createHotel = async (req, res, next) => {
  const hotel = req.body;
  const { image, type, city } = hotel;

  try {
    const photoResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "unsigned",
    });
    const photosrul = photoResponse.url;
    const NewHotel = new Hotel({
      ...hotel,
      image: photosrul,
      type: type.toLowerCase(),
      city: city.toLowerCase(),
    });
    const savedHotel = await NewHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//GET HOTEL BY PARTNER
exports.propertyByPartner = async (req, res, next) => {
  const { partnerId } = req.body;
  try {
    const propertyByPartner = await Hotel.find({ partner: partnerId });
    res.status(200).json(propertyByPartner);
  } catch (error) {
    console.log(error);
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
