require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dpy3euo56",
  api_key: "485554254842889",
  api_secret: "Hxa7JkR3L5TimiBIrZ2NzaQRKpU",
});

module.exports = cloudinary;
