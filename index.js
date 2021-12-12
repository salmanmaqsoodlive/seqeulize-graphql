const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./Schema/index");
const db = require("./models");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log("server running..");
  });
});
