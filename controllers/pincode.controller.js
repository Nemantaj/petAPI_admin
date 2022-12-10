const Pincode = require("../models/Pincodes");

exports.addPincodes = (req, res, next) => {
  const pincodes = req.body.pincodes;

  if (!pincodes) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  const codes = pincodes.split(" ").map((doc) => {
    return { code: doc };
  });

  Pincode.create(codes)
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured while saving pincodes!");
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

exports.switchPincode = (req, res, next) => {
  const id = req.params.id;
  const status = req.query.value;

  if (!id || !status) {
    const error = new Error("An error occured! please try again!");
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  const show = status;

  Pincode.findOneAndUpdate(
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

exports.deletePincode = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error("An error occured! please try again!");
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Pincode.findOneAndRemove({ _id: id })
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

exports.getPincodes = (req, res, next) => {
  Pincode.find({})
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
