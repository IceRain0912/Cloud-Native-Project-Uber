import Position from '../../../entities/Position';
import User from '../../../entities/User';
import {
  CreatePositionMutationArgs,
  CreatePositionResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreatePosition: privateResolver(
      async (
        _,
        args: CreatePositionMutationArgs,
        { req, pubSub }
      ): Promise<CreatePositionResponse> => {
        const user: User = req.user;
        try {
          const position = await Position.create({ ...args }).save();
          user.save();
          return {
            ok: true,
            error: null,
            position
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            position: null
          };
        }
      }
    )
  }
};

export default resolvers;