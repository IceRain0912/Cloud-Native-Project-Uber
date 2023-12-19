import { Resolvers } from '../../../types/resolvers';
import Book from '../../../entities/Book';
import {
  GetBookQueryArgs,
  GetBookResponse
} from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetBook: async (
      _,
      args: GetBookQueryArgs,
      { req }
    ): Promise<GetBookResponse> => {
      try {
        const book = await Book.findOne({
          ID: args.BookID
        });

        if (book) {
          return {
            ok: true,
            error: null,
            book// Wrap the single Book in an array
          };
        } else {
          return {
            ok: false,
            error: 'Book not found',
            book: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          book: null
        };
      }
    }
  }
}

export default resolvers;