const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    select: false,
    minLength: [6, "Password must be longer than 6 Characters"],
  },
  level: {
    type: String,
    required: false
  },
  plan: {
    plan_name: { type: String },
    plan_fee: { type: String }
  },
  coin: {
    type: String,
    required: false
  },
  bal: {
    type: String,
    required: false
  },
  withdrawals: {
    type: String,
    required: false
  },
  deposits: {
    type: String,
    required: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.checkpasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });
};

UserSchema.methods.getResetPasswordToken = async function () {
  const resetToken = await crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = await crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = (await Date.now()) + 10 * (60 * 1000);
  return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
