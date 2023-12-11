import { Resolvers } from '../../../types/resolvers';
import Ride from '../../../entities/Ride';
import privateResolver from '../../../utils/privateResolver';
import { GetRideQueryArgs, GetRideResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetRide: privateResolver(async (_, { MaximumCapacity, DriverID}: GetRideQueryArgs, { req }): Promise<GetRideResponse> => {
      try {
        const ride = await Ride.findOne({
            MaximumCapacity,
            DriverID,
        });

        if (ride) {
          return {
            ok: true,
            error: null,
            ride,
          };
        } else {
          return {
            ok: false,
            error: 'Ride not found', 
            ride: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          ride: null,
        };
      }
    }),
  },
};

export default resolvers;
