const express = require("express");

const user_route = express.Router();

const sec_middleware = async (req, res, next) => {
  console.log("Second middleware fired");

  next();
};

user_route.get("/", sec_middleware, (req, res) => {
  res.send("User route");
});

module.exports = user_route;
