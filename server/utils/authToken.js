import jwt from "jsonwebtoken";

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

export default authToken;
