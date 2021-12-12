const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { GET_ALL_CLASSES } = require("./Queries/Class");
const { CREATE_CLASS } = require("./Mutations/Class");
const { GET_ALL_STUDENTS } = require("./Queries/Student");
const { CREATE_STUDENT } = require("./Mutations/Student");
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: { getAllClasses: GET_ALL_CLASSES },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: { createClass: CREATE_CLASS },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = { schema };
