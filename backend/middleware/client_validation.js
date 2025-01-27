module.exports = async (req, res, next) => {
  const apikey = req.headerString("x-api-key");

  if (apikey !== process.env.PUBLIC_KEY) {
    res.status(403).json({ error: "Authorization failed." });
  } else {
    next();
  }
};
