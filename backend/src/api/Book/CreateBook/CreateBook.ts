import {
  CreateBookMutationArgs,
  CreateBookResponse
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import Book from '../../../entities/Book';

const resolvers: Resolvers = {
  Mutation: {
    CreateBook:
      async (
        _,
        args: CreateBookMutationArgs,
        { req, pubSub }
      ): Promise<CreateBookResponse> => {
        try {
          const book = await Book.create({ ...args }).save();
          return {
            ok: true,
            error: null,
            book
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            book: null
          };
        }
      }
  }
};

export default resolvers;
