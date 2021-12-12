const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const ClassType = new GraphQLObjectType({
  name: "Class",
  fields: () => ({
    id: { type: GraphQLID },
    subject: { type: GraphQLString },
    section: { type: GraphQLString },
  }),
});

module.exports = { ClassType };
