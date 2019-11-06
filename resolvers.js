import User from "./models/user";
import { getInclusionDirectives } from "apollo-utilities";

export const resolvers = {
  Query: {
    async getUser(root, { _id }) {
      return await User.findById(_id);
    },
    async allUser() {
      return await User.find();
    }
  },
  Mutation: {
    async createUser(root, { input }) {
      return await User.create(input);
    }
  }
};
