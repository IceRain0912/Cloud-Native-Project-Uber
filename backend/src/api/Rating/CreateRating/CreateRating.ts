import Rating from '../../../entities/Rating';
import User from '../../../entities/User';
import {
  CreateRatingMutationArgs,
  CreateRatingResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Mutation: {
    CreateRating: privateResolver(
      async (
        _,
        args: CreateRatingMutationArgs,
        { req, pubSub }
      ): Promise<CreateRatingResponse> => {
        const user: User = req.user;
        try {
          const rating = await Rating.create({ ...args }).save();
          user.save();
          return {
            ok: true,
            error: null,
            rating
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            rating: null
          };
        }
      }
    )
  }
};

export default resolvers;