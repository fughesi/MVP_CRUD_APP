const jwt = require("jsonwebtoken");

const authToken = (user) => {
  const JWT = process.env.JWT;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    JWT
  );

  return token;
};

module.exports = authToken;
