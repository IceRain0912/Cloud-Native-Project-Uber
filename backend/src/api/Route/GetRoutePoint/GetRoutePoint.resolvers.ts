import { Resolvers } from '../../../types/resolvers';
import Route from '../../../entities/Route';
import privateResolver from '../../../utils/privateResolver';
import { GetRoutePointQueryArgs, GetRoutePointResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetRoutePoint: privateResolver(async (
      _,
      args: GetRoutePointQueryArgs,
      { req }
    ): Promise<GetRoutePointResponse> => {
      try {
        const route = await Route.findOne({
          where: [
            { StartingPointID: args.StartingPointID },
            { DestinationID: args.DestinationID },
          ],
        }
        );
        if (route) {
          return {
            ok: true,
            error: null,
            route
          };
        } else {
          return {
            ok: false,
            error: 'Ride not found',
            route: null
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          route: null
        }
      }
    })
  }
}

export default resolvers;