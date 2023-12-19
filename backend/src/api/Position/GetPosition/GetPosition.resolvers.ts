import { Resolvers } from '../../../types/resolvers';
import { Position } from '../../../entities/Position';
import privateResolver from '../../../utils/privateResolver';
import { GetPositionQueryArgs, GetPositionResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetPosition: privateResolver(async (
      _,
      args: GetPositionQueryArgs,
      { req }
    ): Promise<GetPositionResponse> => {
      try {
        const position = await Position.findOne({
          UserID: args.UserID, Longtitude: args.Longtitude, Latitude: args.Latitude
        });

        if (position) {
          return {
            ok: true,
            error: null,
            position
          };
        } else {
          return {
            ok: false,
            error: 'Position not found',
            position: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          position: null
        };
      }
    })
  }
}

export default resolvers;
