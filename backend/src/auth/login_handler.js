const { trim } = require("validator");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const login_handler = async (req, res) => {
  const username = trim(req.bodyString("username") || "");
  const password = req.bodyString("password");

  try {
    if (username && password && password.length > 5) {
      //Find user by username

      var user = await User.findOne({ username: username });

      if (user) {
        //Compare user entered password and db stored password hash in bcrypt

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          //If password is valid then generate jwt token for authenticating user on further requests.

          const token = jwt.sign(
            { userId: user._id, username: user.username, email: user.email },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: 2592000 }
          );

          //console.log(token);

          res.json({
            message: "Login successful",
            user: {
              userId: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
              account_status: user.account_status,
            },
            token: token,
          });
        } else {
          res.json({ error: "Invalid username or password." });
        }
      } else {
        res.json({ error: "User acount does not exists." });
      }
    } else {
      res.json({ error: "Invalid username or password." });
    }
  } catch (e) {
    res.json({ error: e });
  }
};

module.exports = login_handler;
