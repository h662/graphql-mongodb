import User from "./models/user";
import { createSecureServer } from "http2";

export const resolvers = {
  Query: {
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
