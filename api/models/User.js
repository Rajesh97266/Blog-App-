const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
