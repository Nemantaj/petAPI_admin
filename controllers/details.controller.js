const Breed = require("../models/Breed");
const Size = require("../models/Size");

exports.createSize = (req, res, next) => {
  const size = req.body.size;
  const trial = req.body.trial;
  const subs = req.body.subs;

  if (!size || !trial || !subs) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  const newBreads = new Size({
    size: size,
    "price.trial": +trial,
    "price.subscription": +subs,
  });

  newBreads
    .save()
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured while saving breads!");
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

exports.switchSize = (req, res, next) => {
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

  Size.findOneAndUpdate(
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

exports.removeSize = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Size.findByIdAndRemove(id)
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

exports.editSize = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Size.findByIdAndUpdate(
    id,
    {
      $set: {
        size: req.body.size,
        "price.trial": req.body.trial,
        "price.subscription": req.body.subs,
      },
    },
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

exports.getSizes = (req, res, next) => {
  Size.find({})
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
