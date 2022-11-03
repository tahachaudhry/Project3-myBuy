import jwt from 'jsonwebtoken';

const generateToken = id => {
  console.log(process.env.JWT_SECRET_KEY)
  return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: '30d',
  });
};

export default generateToken;
