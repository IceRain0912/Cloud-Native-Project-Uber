import Transaction from '../../../entities/Transaction';
import { CreateTransactionMutationArgs, CreateTransactionResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
    Mutation: {
      CreateTransaction: privateResolver(
        async (
          _,
          args: CreateTransactionMutationArgs,
          { req }
        ): Promise<CreateTransactionResponse> => {
          try {
            const transaction = await Transaction.create({ ...args}).save();
            return {
              ok: true,
              error: null,
              transaction
            };
          } catch (error) {
            return {
              ok: false,
              error: error.message,
              transaction: null
            };
          }
        }
      ),
    },
  };
  
  export default resolvers;
