const { ClassType } = require("../TypeDefs/Class");
const { GraphQLString } = require("graphql");
const { Class } = require("../../models");

const CREATE_CLASS = {
  type: ClassType,
  args: {
    subject: { type: GraphQLString },
    section: { type: GraphQLString },
  },
  async resolve(parent, args) {
    await Class.create(args);
    return args;
  },
};

module.exports = { CREATE_CLASS };
