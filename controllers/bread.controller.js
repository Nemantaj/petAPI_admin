const Breed = require("../models/Breed");
const Size = require("../models/Size");

exports.createBreeds = (req, res, next) => {
  const breeds = req.body.breeds;
  const size = req.body.size;

  if (!breeds || !size) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Breed.create({ name: breeds, size: size, isActive: true })
    .then((data) => data.populate("size"))
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

exports.deleteBreed = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Breed.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        const error = new Error("An error occured while saving breads!");
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

exports.getBreeds = (req, res, next) => {
  Breed.find({})
    .sort({ _id: -1 })
    .populate("size")
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

exports.switchBreed = (req, res, next) => {
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

  Breed.findByIdAndUpdate(id, { $set: { isActive: show } }, { new: true })
    .then((data) => {
      data.populate("size");
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

exports.editBreed = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error(
      "The required parameters are missing in the request object!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Breed.findByIdAndUpdate(
    id,
    {
      $set: { name: req.body.name, size: req.body.size },
    },
    { new: true }
  )
    .then((data) => data.populate("size"))
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
