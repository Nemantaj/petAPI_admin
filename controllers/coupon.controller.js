const Coupon = require("../models/Coupon");

exports.createCoupon = (req, res, next) => {
  const code = req.body.code;
  const discount = req.body.discount;

  if (!code || !discount) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  const newCoupon = new Coupon({
    code: code,
    amount: +discount,
    isActive: true,
  });

  Coupon.find({ code: code })
    .then((result) => {
      if (result.length > 0) {
        const error = new Error(
          "A coupon already exists with this coupon code!"
        );
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      return newCoupon.save();
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured! please try again!");
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      res.json({ payload: result, success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editCoupon = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Coupon.find({ code: req.body.code, _id: { $ne: id } })
    .then((result) => {
      if (result.length > 0) {
        const error = new Error(
          "A coupon already exists with this coupon code!"
        );
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      return Coupon.findByIdAndUpdate(
        id,
        {
          $set: { code: req.body.code, amount: +req.body.discount },
        },
        { new: true }
      );
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured! please try again!");
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      res.json({ payload: result, success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteCoupon = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Coupon.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured! please try again!");
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      res.json({ success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.switchCoupon = (req, res, next) => {
  const id = req.params.id;
  const status = req.query.value;

  if (!id || !status) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  const show = status;

  Coupon.findOneAndUpdate(
    { _id: id },
    { $set: { isActive: show } },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured! please try again!");
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      res.json({ payload: result, success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getCoupons = (req, res, next) => {
  Coupon.find({})
    .sort({ _id: -1 })
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured! please try again!");
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      res.json({ payload: result, success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
