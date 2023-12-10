import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    GetBook: privateResolver(async (_, __, context) => {
      const { req: { book } } = context;
      return {
        ok: true,
        error: null,
        book
      };
    })
  }
}

export default resolvers;