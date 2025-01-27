const express = require("express");
const app = express();
require("dotenv").config();
app.use(require("sanitize").middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authentication = require("./middleware/authentication");
const user_route = require("./src/user/route");
const auth_route = require("./src/auth/auth_route");
const client_validation = require("./middleware/client_validation");

const PORT = process.env.PORT || 2501;

app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Social Circle API Gateway</h1>");
});

app.use("/auth", client_validation, auth_route);
app.use("/user", client_validation, authentication, user_route);
app.use("/feed", client_validation, authentication, user_route);
app.use("/post", client_validation, authentication, user_route);

//For unknown route or handling page not found.

app.use("*", (req, res) => {
  res.send("Seems like you have lost.");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
