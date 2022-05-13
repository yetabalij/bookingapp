const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//imported routeres
const authRoute = require("../api/routes/auth");
const authHotels = require("../api/routes/hotels");
const authRooms = require("../api/routes/rooms");
const authUsers = require("../api/routes/users");

dotenv.config();

const app = express();

//router middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", authHotels);
app.use("/api/rooms", authRooms);
app.use("/api/users", authUsers);

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected");
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  connect();
  console.log("app started");
});
