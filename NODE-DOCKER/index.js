const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routes/postRoutes");

// IMPORTING MONGOOSE ENVIROMENT VARAIBLE
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config");

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  // connecting to mongodb through mongoose
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("connected to db"))
    .catch((err) => {
      console.log(err);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hi There ram here checking in development level 222</h2>");
});

// localhost::3000/api/v1/posts
app.use("/api/v1/posts", postRouter);

app.listen(port, () => {
  console.log("listening on port", port);
});
