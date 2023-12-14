import { Resolvers } from '../../../types/resolvers';
import Location from '../../../entities/Location';
import privateResolver from '../../../utils/privateResolver';
import { GetLocationQueryArgs, GetLocationResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetLocation: privateResolver(async (
      _,
      args: GetLocationQueryArgs,
      { req }
    ): Promise<GetLocationResponse> => {
      try {
        const location = await Location.findOne({
          ID: args.LocationID
        });

        if (location) {
          return {
            ok: true,
            error: null,
            location
          };
        } else {
          return {
            ok: false,
            error: 'Location not found',
            location: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          location: null
        };
      }
    })
  }
}

export default resolvers;
