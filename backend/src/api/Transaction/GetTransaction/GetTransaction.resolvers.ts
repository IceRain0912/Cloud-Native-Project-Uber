import { Resolvers } from '../../../types/resolvers';
import Transaction from '../../../entities/Transaction';
import privateResolver from '../../../utils/privateResolver';
import { GetTransactionQueryArgs, GetTransactionResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetTransaction: privateResolver(async (_, { PassengerID, RouteID, Payment, DepartureTime, CarID, RequestTime, Status, ArrivalTime}: GetTransactionQueryArgs, { req }): Promise<GetTransactionResponse> => {
      try {
        const transaction = await Transaction.findOne({
            PassengerID,
            RouteID,
            Payment,
            DepartureTime,
            CarID,
            RequestTime,
            Status,
            ArrivalTime,
        });

        if (transaction) {
          return {
            ok: true,
            error: null,
            transaction,
          };
        } else {
          return {
            ok: false,
            error: 'transaction not found', 
            transaction: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          transaction: null,
        };
      }
    }),
  },
};

export default resolvers;