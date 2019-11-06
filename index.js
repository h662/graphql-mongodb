// index.js
import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();
const port = 3000;
const dbName = "test";
const uri =
  "mongodb+srv://hong:P@ssw0rd@graphql-mongodb-oudhi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise; // 비동기 처리
mongoose.connect(uri, { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.json({
    msg: "Hello"
  });
});

app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Listen PORT : ${port}`);
});
