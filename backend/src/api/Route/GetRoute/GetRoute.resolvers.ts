import { Resolvers } from '../../../types/resolvers';
import Route from '../../../entities/Route';
import privateResolver from '../../../utils/privateResolver';
import { GetRouteQueryArgs, GetRouteResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetRoute: privateResolver(async (
      _,
      args: GetRouteQueryArgs,
      { req }
    ): Promise<GetRouteResponse> => {
      try {
        const route = await Route.findOne({
          ID: args.RouteID
        },
        { relations: ['passenger', 'driver'] }
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