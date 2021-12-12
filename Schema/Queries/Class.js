const { GraphQLList } = require("graphql");
const { ClassType } = require("../TypeDefs/Class");
const { Class } = require("../../models");

const GET_ALL_CLASSES = {
  type: new GraphQLList(ClassType),
  resolve() {
    return Class.findAll();
  },
};

module.exports = {
  GET_ALL_CLASSES,
};
