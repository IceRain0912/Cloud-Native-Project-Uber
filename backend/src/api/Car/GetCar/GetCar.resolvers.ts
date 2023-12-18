import { Resolvers } from '../../../types/resolvers';
import Car from '../../../entities/Car';
import privateResolver from '../../../utils/privateResolver';
import { GetCarQueryArgs, GetCarResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetCar: privateResolver(async (
      _,
      args: GetCarQueryArgs,
      { req }
    ): Promise<GetCarResponse> => {
      try {
        const car = await Car.findOne({
          ID: args.CarID
        });

        if (car) {
          return {
            ok: true,
            error: null,
            car// Wrap the single car in an array
          };
        } else {
          return {
            ok: false,
            error: 'Car not found',
            car: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          car: null
        };
      }
    })
  }
}

export default resolvers;