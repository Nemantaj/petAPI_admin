const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    pincode: { type: Number },
    address: [
      {
        pincode: { type: Number },
        state: { type: String },
        city: { type: String },
        houseNo: { type: String },
        area: { type: String },
        landmarks: { type: String },
      },
    ],
    password: { type: String },
    token: { type: String },
    mobile: { type: Number },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("orders", {
  ref: "Order",
  localField: "_id",
  foreignField: "userId",
});

module.exports = mongoose.model("User", userSchema);
