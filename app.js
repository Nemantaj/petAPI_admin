require("dotenv").config();

const path = require("path");

const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const aws = require("aws-sdk");
const autoInc = require("mongoose-auto-increment");

//Import routes
const adminRoutes = require("./routes/admin");
const pincodeRoutes = require("./routes/pincode");
const breedRoutes = require("./routes/breed");
const detailRoutes = require("./routes/details");
const userRoutes = require("./routes/user");
const couponRoutes = require("./routes/coupon");

const PORT = process.env.PORT || 3001;
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

const MONGODB_URI = process.env.MONGO_URI;

const app = express();
app.use(cors(corsOptions));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(adminRoutes);
app.use("/pincode", pincodeRoutes);
app.use("/breed", breedRoutes);
app.use("/size", detailRoutes);
app.use("/user", userRoutes);
app.use("/coupon", couponRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  res.status(status).json({
    title: error.title,
    msg: error.message,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("Connected!");
    const server = app.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
