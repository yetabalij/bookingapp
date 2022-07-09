const Room = require("./../models/rooms");
const Hotel = require("./../models/hotels");
const { createError } = require("./../utils/error");

exports.createRoom = async (req, res, next) => {
  //const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

//UPDATE
exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

//DELETE
exports.deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};

//GET
exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//GET ALL HOTELS
exports.getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

//GET ALL ROOMS BY PROPERTY.
exports.getAllRoomsByProperty = async (req, res, next) => {
  //console.log(req.params);
  const id = req.params.propertyId;
  try {
    const rooms = await Room.find({ hotel: id });
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
