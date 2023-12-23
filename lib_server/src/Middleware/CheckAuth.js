const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    console.log('1');
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log('2');

    const decode_token = jwt.verify(token, "divide&rule");
    console.log('3');

    console.log(decode_token);
    req.userData = {
      username: decode_token.username,
      password: decode_token.password,
      role: decode_token.role,
      id: decode_token.id,
    };
    console.log('4');

    next();
  } catch (error) {
    return res.status(400).json({ message: "Authentication failed" });
  }
};
