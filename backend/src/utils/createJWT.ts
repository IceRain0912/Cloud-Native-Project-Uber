import jwt from 'jsonwebtoken';

const createJWT = (ID: number): string => {
  const token = jwt.sign(
  {
    ID
  }, process.env.JWT_TOKEN || ''
  );
  return token;
}

export default createJWT;