const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./../models/users");
const { createError } = require("./../utils/error");

exports.register = async (req, res, next) => {
  try {
    const userExist = await User.findOne({
      email: req.body.email,
    });

    if (userExist) {
      return next(createError(409, "User alredy existed."));
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: "gust",
    });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, name: newUser.username, role: newUser.role },
      process.env.JWT_SEKRETE,
      { expiresIn: "1h" }
    );
    const { password, role, ...otherDetails } = newUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const newUser = await User.findOne({
      email: req.body.email,
    });
    if (!newUser) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      newUser.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      { id: newUser._id, name: newUser.username, role: newUser.role },
      process.env.JWT_SEKRETE,
      { expiresIn: "1h" }
    );
    const { password, role, ...otherDetails } = newUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } catch (err) {
    next(err);
  }
};
