import { withFilter } from 'graphql-yoga';

const resolvers = {
  Subscription: {
    PositionSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator('newPosition'),
        async (payload, _, { context }) => {
          return true;
        }
      )
    }
  }
}

export default resolvers;