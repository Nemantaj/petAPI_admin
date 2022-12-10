const User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
  User.find({})
    .populate("orders")
    .sort({ _id: -1 })
    .then((result) => {
      res.json({ payload: result, success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
