import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
