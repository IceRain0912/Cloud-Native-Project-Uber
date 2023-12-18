import Ride from '../../../entities/Ride';
import User from '../../../entities/User';
import {
  CreateRideMutationArgs,
  CreateRideResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreateRide: privateResolver(
      async (
        _,
        args: CreateRideMutationArgs,
        { req, pubSub }
      ): Promise<CreateRideResponse> => {
        const user: User = req.user;
        try {
          const ride = await Ride.create({ ...args }).save();
          user.save();
          return {
            ok: true,
            error: null,
            ride
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            ride: null
          };
        }
      }
    )
  }
};

export default resolvers;