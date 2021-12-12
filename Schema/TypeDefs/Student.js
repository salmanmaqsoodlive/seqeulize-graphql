const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

module.exports = { StudentType };
