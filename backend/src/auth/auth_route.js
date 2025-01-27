const express = require("express");

const auth_route = express.Router();

auth_route.post("/login", require("./login_handler"));
auth_route.post("/create", require("./signup_handler"));
auth_route.post("/verify", require("./account_verification"));
auth_route.post("/code_resend", require("./resend_code"));

module.exports = auth_route;
