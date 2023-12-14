import User from '../../../entities/User';
import { EmailSignUpMutationArgs, EmailSignUpResponse } from '../../../types/graph';
import { Resolvers } from "../../../types/resolvers";
import createJWT from '../../../utils/createJWT';

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs,
    ): Promise<EmailSignUpResponse> => {
      try {
        const { PhoneNumber } = args;
        const existingUser = await User.findOne({ PhoneNumber });
        if (existingUser) {
          return {
            ok: false,
            error: 'existing email. You should log in instead',
            token: null
          }
        } else {
          const newUser = await User.create({ ...args }).save();
          if (newUser.PhoneNumber) {
            console.log("phone number verify")
          }
          const token = createJWT(newUser.ID);
          return {
            ok: true,
            error: null,
            token
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        }
      }
    }
  }
}

export default resolvers;