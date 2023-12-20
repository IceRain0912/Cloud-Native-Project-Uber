import Location from '../../../entities/Location';
import User from '../../../entities/User';
import {
  CreateLocationMutationArgs,
  CreateLocationResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreateLocation: privateResolver(
      async (
        _,
        args: CreateLocationMutationArgs,
        // { req, pubSub }
      ): Promise<CreateLocationResponse> => {
        // const user: User = req.user;
        // console.log("user: ", user)
        try {
          console.log("args: ", args)
          const location = await Location.create({ ...args }).save();
          // const location = null;
          console.log("location: ", location);
          // await user.save();
          return {
            ok: true,
            error: null,
            location
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            location: null
          };
        }
      }
    )
  }
};

export default resolvers;