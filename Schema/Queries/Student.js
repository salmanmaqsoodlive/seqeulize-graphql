const { GraphQLList } = require("graphql");
const { StudentType } = require("../TypeDefs/Class");
const { Student } = require("../../models");

const GET_ALL_STUDENTS = {
  // type: new GraphQLList(StudentType),
  resolve() {
    return Student.findAll();
  },
};

module.exports = {
  GET_ALL_STUDENTS,
};
