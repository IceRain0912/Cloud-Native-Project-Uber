import jwt from 'jsonwebtoken';
import User from '../entities/User';

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || '');
    const { ID } = decoded;
    const user = await User.findOne({ ID });
    return user;
  } catch (error) {
    return undefined;
  }
}

export default decodeJWT;