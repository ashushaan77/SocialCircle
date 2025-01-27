const { mongoose } = require("../libs/db_connection");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please enter valid name"] },
  username: {
    type: String,
    unique: true,
    required: [true, "Please create unique username"],
  },
  email: { type: String, required: [true, "Please provide valid email Id"] },
  password: {
    type: String,
    required: [true, "Please create a password 8 characters long"],
  },
  bio: String,
  profile_picture: String,
  account_status: {
    type: String,
    enum: ["Active", "Inactive", "Blocked"],
    default: "Active",
  },
  createdAt: { type: Date, default: Date.now },
  token: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
