const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


const questionRoutes = require("./routes/questionRoutes")
const quizRoutes = require("./routes/quizRoutes")

const app = express();
const PORT = 3000;

//midddleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/question", questionRoutes);
app.use("/quiz", quizRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
