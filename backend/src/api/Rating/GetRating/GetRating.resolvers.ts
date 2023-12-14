import { Resolvers } from '../../../types/resolvers';
import Rating from '../../../entities/Rating';
import privateResolver from '../../../utils/privateResolver';
import { GetRatingQueryArgs, GetRatingResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetRating: privateResolver(async (_, { RateID }: GetRatingQueryArgs, { req }): Promise<GetRatingResponse> => {
      try {
        const rating = await Rating.findOne({
          ID: RateID,
        });

        if (rating) {
          return {
            ok: true,
            error: null,
            rating,
          };
        } else {
          return {
            ok: false,
            error: 'Rating not found', // Adjusted error message
            rating: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          rating: null,
        };
      }
    }),
  },
};

export default resolvers;
