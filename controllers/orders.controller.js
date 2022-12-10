const Orders = require("../models/Orders");
const Dog = require("../models/Dogs");

exports.getOrders = (req, res, next) => {
  Orders.find({})
    .populate("petInfo userId")
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

exports.ordersByPincode = (req, res, next) => {
  Orders.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userId",
      },
    },
    {
      $lookup: {
        from: "dogs",
        localField: "petInfo",
        foreignField: "_id",
        as: "petInfo",
      },
    },
    { $unwind: "$petInfo" },
    {
      $group: {
        _id: "$userId.pincode",
        orders: { $push: "$$ROOT" },
      },
    },
    { $unwind: "$_id" },
  ])
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
