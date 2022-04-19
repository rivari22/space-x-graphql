import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientGraphql = new ApolloClient({
  uri: `${process.env.GRAPHQL_URL}`,
  cache: new InMemoryCache(),
});
