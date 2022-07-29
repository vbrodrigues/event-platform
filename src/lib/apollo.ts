import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl65ow0et8yvz01ukdcbo3kfv/master",
  cache: new InMemoryCache(),
});
