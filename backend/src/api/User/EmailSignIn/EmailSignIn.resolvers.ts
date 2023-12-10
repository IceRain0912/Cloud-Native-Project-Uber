import User from '../../../entities/User';
import { EmailSignInMutationArgs, EmailSignInResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import createJWT from '../../../utils/createJWT';

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (_, args: EmailSignInMutationArgs): Promise<EmailSignInResponse> => {
      const { PhoneNumber, Password } = args;
      try {
        const user = await User.findOne({ PhoneNumber });
        if (!user) {
          return {
            ok: false,
            error: 'No User found with that email',
            token: null
          };
        }
        const checkPassword = await user.comparePassword(Password);
        if (checkPassword) {
          const token = createJWT(user.ID);
          return {
            ok: true,
            error: null,
            token
          }
        } else {
          return {
            ok: false,
            error: 'Wrong password',
            token: null
          }
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