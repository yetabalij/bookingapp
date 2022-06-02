const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mogran = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("./controlers/cloudinary");

//imported routeres
const authRoute = require("../api/routes/auth");
const hotelsRoute = require("../api/routes/hotels");
const roomsRoute = require("../api/routes/rooms");
const usersRoute = require("../api/routes/users");
const exampleRouter = require("./routes/hotels/queries");

//Partner Imported Routes
const partnerRouter = require("./routes/Partners/auth");

dotenv.config();

const app = express();

//middlwares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors());
app.use(mogran("dev"));

//router middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api", exampleRouter);

//Partner Router Middlewares
app.use("/api", partnerRouter);

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
