import Position from '../../../entities/Position';
import User from '../../../entities/User';
import {
  UpdatePositionMutationArgs,
  UpdatePositionResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    UpdatePosition: privateResolver(
      async (
        _,
        args: UpdatePositionMutationArgs,
        { req, pubSub }
      ): Promise<UpdatePositionResponse> => {
        const user: User = req.user;
        const { positionID, ...updateData } = args;

        try {
          const position = await Position.findOne({positionID: positionID});

          if (!position) {
            return {
              ok: false,
              error: 'Position not found',
              position: null
            };
          }

          // Update position fields
          Object.assign(position, updateData);
          await position.save();

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