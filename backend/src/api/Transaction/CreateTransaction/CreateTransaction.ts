import Transaction from '../../../entities/Transaction';
import User from '../../../entities/User';
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
          const user: User = req.user;
          try {
            await Transaction.create({ ...args}).save();
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
