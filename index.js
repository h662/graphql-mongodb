// index.js
import express from "express";
import mongoose from "mongoose";

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

app.listen(port, () => {
  console.log(`Listen PORT : ${port}`);
});
