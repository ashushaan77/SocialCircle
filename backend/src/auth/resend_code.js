const { trim, isEmail, isStrongPassword } = require("validator");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const username = trim(req.bodyString("username"));

  if (username && username.length > 3) {
    //Check if user details already existed - Username OR Email
    const isUserExists = await User.findOne({
      username: username,
    }).select(["-_id", "username", "token", "email"]);

    if (isUserExists) {
      const verification_code = Math.floor(Math.random() * 9000) + 1000;

      const verification_token = jwt.sign(
        { username: username },
        verification_code + "" + process.env.JWT_PRIVATE_KEY,
        { expiresIn: 600 }
      );

      const data = await User.findOneAndUpdate(
        { username: username },
        { token: verification_token }
      );

      console.log(data);
      console.log(verification_code);
      if (data) {
        res.json({
          message: "Verification code has been sent on your registered email.",
          username: username,
          validation_token: verification_token,
          code: verification_code, // We will use it only in development purpose. In production, We will sent it to email Id for email verification.
        });
      } else {
        res.json({
          error:
            "Unable to generate verification code for you. Please report this issue to us.",
        });
      }
    } else {
      res.json({
        error: "User account does not exists.",
      });
    }
  } else if (name.length < 2) {
    res.json({ error: "Please enter your valid name." });
  } else if (username.length < 4) {
    res.json({
      error: "Please create valid username. Minimum of 4 charectors & number.",
    });
  } else if (!isEmail(email)) {
    res.json({ error: "Please enter valid email Id" });
  } else if (!isValidPassword) {
    res.json({
      error:
        "Please create a strong password containing minimum 8 charecters with the combination of capital & small letters, numbers.",
    });
  } else {
    res.json({ error: "Please fill the form correctly." });
  }
};
