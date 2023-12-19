import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

// Create an ApolloLink that adds the authentication header to each request
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authentication token from wherever you have stored it
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MiwiaWF0IjoxNzAyOTY5MTcwfQ.Ehj6DBQhrJqRUS46P1JQ1dUJdqL4iWRhZBrSnSfX3R0";

  // Add the authentication header to the request
  operation.setContext({
    headers: {
      Authorization: authToken ? `${authToken}` : null,
    },
  });

  // Call the next link in the middleware chain (if any)
  return forward(operation);
});

// Create an HttpLink for your GraphQL API endpoint
const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

// Combine the authLink and httpLink into a single link using ApolloLink.from
const link = ApolloLink.from([authLink, httpLink]);

// Create the Apollo Client instance
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Now you can use the client for making GraphQL requests with the authentication header

export { ApolloProvider as CustomApolloProvider, client };
