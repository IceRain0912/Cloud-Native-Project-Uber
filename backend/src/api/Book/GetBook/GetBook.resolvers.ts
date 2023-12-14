import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Query: {
    GetBook: async (_, __, context) => {
      const { req: { book } } = context;
      return {
        ok: true,
        error: null,
        book
      };
    }
  }
}

export default resolvers;