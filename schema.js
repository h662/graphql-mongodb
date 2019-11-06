import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type User {
        _id: ID!
        name: String!
        age: Int!
        gender: String!
    }
    
    type Query {
        allUser: [User]
    }`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
