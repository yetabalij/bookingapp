const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mondogdb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mondogdb connected");
});
app.listen(8000, () => {
  connect();
  console.log("app started");
});
