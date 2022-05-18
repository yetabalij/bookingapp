const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mogran = require("morgan");
const cookieParser = require("cookie-parser");

//imported routeres
const authRoute = require("../api/routes/auth");
const hotelsRoute = require("../api/routes/hotels");
const roomsRoute = require("../api/routes/rooms");
const usersRoute = require("../api/routes/users");
const exampleRouter = require("./routes/hotels/queries");

dotenv.config();

const app = express();

//middlwares
app.use(express.json());
app.use(cookieParser());
app.use(mogran("dev"));

//router middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api", exampleRouter);

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
