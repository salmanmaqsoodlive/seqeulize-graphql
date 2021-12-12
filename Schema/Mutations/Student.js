const { StudentType } = require("../TypeDefs/Class");
const { GraphQLString } = require("graphql");
const { Student } = require("../../models");

const CREATE_STUDENT = {
  type: StudentType,
  args: {
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    await Student.create(args);
    return args;
  },
};

module.exports = { CREATE_STUDENT };
