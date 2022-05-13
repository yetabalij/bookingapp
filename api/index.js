const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mogran = require("morgan");
const cookieParser = require("cookie-parser");

//imported routeres
const authRoute = require("../api/routes/auth");
const authHotels = require("../api/routes/hotels");
const authRooms = require("../api/routes/rooms");
const authUsers = require("../api/routes/users");

dotenv.config();

const app = express();

//middlwares
app.use(express.json());
app.use(cookieParser());
app.use(mogran("dev"));

//router middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", authHotels);
app.use("/api/rooms", authRooms);
app.use("/api/users", authUsers);

//error middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//db connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected");
  } catch (error) {
    throw error;
  }
};

//app listening
app.listen(8000, () => {
  connect();
  console.log("app started");
});
