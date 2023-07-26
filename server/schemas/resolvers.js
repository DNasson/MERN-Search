const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { createUser, saveBook } = require("../controllers/user-controller");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return user.findOne({ username });
    },
  },
};
Mutation: {
  createUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
    return { token, user };
  };
  login: async (parent, { email, password }) => {
    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await saveBook({
          ...bookData,
          username: context.user.username,
        });
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    };
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await deleteBook({
          username: context.user.username,
          bookId,
        });
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    };
  };
}
module.exports = resolvers;