const mongoose = require("mongoose");

async function db_connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected");
  } catch (err) {
    console.log("Database error: " + err);
  }
}

db_connection();

module.exports = { mongoose };
