import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query } from "./resolvers";

const server = new ApolloServer({ resolvers: { Query }, typeDefs });

server.listen().then(({ url }) => {
  console.log(`server running on ${url}`);
});
