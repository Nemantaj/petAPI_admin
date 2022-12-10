const multer = require("multer");
const path = require("path");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

var s3 = new aws.S3();
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g, "-") +
//         path.extname(file.originalname)
//     );
//   },
// });

const fileStorage = multerS3({
  s3: s3,
  acl: "public-read",
  bucket: "bemyguestimages",
  key: (req, file, cb) => {
    cb(
      null,
      "images/" +
        new Date().toISOString().replace(/:/g, "-") +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.multiUpload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
}).array("images", 5);

exports.deleteMultiple = (objects) => {
  console.log(objects);
  s3.deleteObjects(
    { Bucket: "bemyguestimages", Delete: { Objects: objects } },
    (err, data) => {
      if (data) {
        console.log("Deleted!");
      } else {
        console.log("Error!");
      }
    }
  );
};
