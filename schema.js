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
        getUser(_id: ID!): User
        allUser: [User]
    }

    input UserInput {
        name: String!
        age: Int!
        gender: String!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
