const jwt = require("jsonwebtoken");
const { createError } = require("./error");

exports.verifyToken = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers["authorization"];
  //console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT_SEKRETE, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

exports.verifPartner = (req, res, next) => {
  if (req.user.role === "partner") {
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};

// exports.verifyAdmin = (req, res, next) => {
//   if (req.user.admin) {
//     return next();
//   } else {
//     return next(createError(401, "You are not authorized!"));
//   }
// };
