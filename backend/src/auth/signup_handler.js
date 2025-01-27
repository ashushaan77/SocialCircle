const { trim, isEmail, isStrongPassword } = require("validator");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const username = trim(req.bodyString("username"));
  const name = req.bodyString("name");
  const email = req.bodyString("email");
  const password = req.bodyString("password");

  //Check password strength

  const isValidPassword = isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  });

  if (
    email &&
    isEmail(email) &&
    password &&
    isValidPassword &&
    username &&
    username.length > 3 &&
    name &&
    name.length > 2
  ) {
    //Check if user details already existed - Username OR Email
    const isUserExists = await User.findOne({
      $or: [{ username: username }, { email: email }],
    }).select(["-_id", "username", "email"]);

    if (!isUserExists) {
      const hash = await bcrypt.hash(password, 10);

      const verification_code = Math.floor(Math.random() * 9000) + 1000;

      const verification_token = jwt.sign(
        { username: username },
        verification_code + "" + process.env.JWT_PRIVATE_KEY,
        { expiresIn: 600 }
      );

      const user = new User({
        name: name,
        username: username,
        email: email,
        password: hash,
        account_status: "Inactive",
        token: verification_token,
      });

      const data = await user.save();

      console.log(verification_code);

      res.json({
        message: "User account created successfully.",
        username: user,
        validation_token: verification_token,
        code: verification_code, // We will use it only in development purpose. In production, We will sent it to email Id for email verification.
      });
    } else {
      res.json({
        error:
          isUserExists.username === username
            ? "Username is already take. Please different username."
            : "Email id already registered with different user.",
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
