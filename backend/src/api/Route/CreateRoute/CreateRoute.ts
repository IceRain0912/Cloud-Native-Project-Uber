import Route from '../../../entities/Route';
import User from '../../../entities/User';
import {
  CreateRouteMutationArgs,
  CreateRouteResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreateRoute: privateResolver(
      async (
        _,
        args: CreateRouteMutationArgs,
        { req, pubSub }
      ): Promise<CreateRouteResponse> => {
        const user: User = req.user;
        try {
          const route = await Route.create({ ...args }).save();
          user.save();
          return {
            ok: true,
            error: null,
            route
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            route: null
          };
        }
      }
    )
  }
};

export default resolvers;
