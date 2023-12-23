const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decode_token = jwt.verify(token, "divide&rule");

    console.log(decode_token);
    req.userData = {
      username: decode_token.username,
      password: decode_token.password,
      role: decode_token.role,
      id: decode_token.id,
    };
    next();
  } catch (error) {
    return res.status(400).json({ message: "Authentication failed" });
  }
};
