const jwt = require("jsonwebtoken");
const { isJWT } = require("validator");
const User = require("../../models/User");

module.exports = async (req, res) => {
  const token = req.headerString("token");
  const verification_code = req.bodyString("code");

  if (token && isJWT(token) && verification_code.length == 4) {
    jwt.verify(
      token,
      verification_code + "" + process.env.JWT_PRIVATE_KEY,
      async function (err, decoded) {
        if (err) {
          res.json({
            error:
              err.name === "JsonWebTokenError"
                ? "You have entered invalid code."
                : err.name === "TokenExpiredError"
                ? "Verfication code has been expired. Please regenerate this code."
                : err.message,
          });
        } else {
          const username = decoded.username;

          if (username) {
            console.log(decoded.username);

            const user = await User.findOneAndUpdate(
              {
                $and: [{ username: username }, { token: token }],
              },
              { token: null, account_status: "Active" }
            ).select(["-_id", "-password", "-createdAt", "-token"]);

            console.log(user);
            if (user) {
              res.json({
                message: "Account verification was successful.",
                user: user,
              });
            } else {
              res.json({
                error: "Invalid Token. Please try to resend the code again.",
              });
            }
          } else {
            res.json({
              error: "Invalid Token. Please try to resend the code again.",
            });
          }
        }
      }
    );
  } else {
    res.json({ error: "You have entered invalid code." });
  }
};
