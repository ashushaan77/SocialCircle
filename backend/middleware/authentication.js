const authentication = async (req, res, next) => {
  console.log("Authentication Middleware executed");

  next();
};

module.exports = authentication;
