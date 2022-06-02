const Hotel = require("./../../models/hotels");

//CREATE
exports.createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  const { photos } = newHotel;

  // cloudinary.v2.uploader.upload(
  //   "dog.mp4",
  //   {
  //     resource_type: "video",
  //     public_id: "myfolder/mysubfolder/dog_closeup",
  //     chunk_size: 6000000,
  //     eager: [
  //       { width: 300, height: 300, crop: "pad", audio_codec: "none" },
  //       {
  //         width: 160,
  //         height: 100,
  //         crop: "crop",
  //         gravity: "south",
  //         audio_codec: "none",
  //       },
  //     ],
  //     eager_async: true,
  //     eager_notification_url: "https://mysite.example.com/notify_endpoint",
  //   },
  //   function (error, result) {
  //     console.log(result, error);
  //   }
  // );
  try {
    const savedHotel = await newHotel.save();
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
