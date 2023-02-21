const express = require("express");
const app = express();
const PORT = 3003;
const graphqlHTTP = require("express-graphql").graphqlHTTP; // require express-graphql makes express server that runs the graphql query
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://roop:v7DkOedWAhjcekdG@cluster0.wrn7pih.mongodb.net/?retryWrites=true&w=majority`
);

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", async (req, res) => {
  return res.send("Welcome to graphQl server");
});

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
