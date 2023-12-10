import Car from '../../../entities/Car';
import User from '../../../entities/User';
import {
  CreateCarMutationArgs,
  CreateCarResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreateCar: privateResolver(
      async (
        _,
        args: CreateCarMutationArgs,
        { req, pubSub }
      ): Promise<CreateCarResponse> => {
        const user: User = req.user;
        try {
          const car = await Car.create({ ...args }).save();
          user.save();
          return {
            ok: true,
            error: null,
            car
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            car: null
          };
        }
      }
    )
  }
};

export default resolvers;
