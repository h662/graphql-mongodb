import User from "./models/user";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

export const resolvers = {
  Query: {
    async allUser() {
      return await User.find();
    }
  }
};
