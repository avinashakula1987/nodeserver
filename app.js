const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const userRouter = require("./api/users/user.router");
const subjectsRouter = require("./api/users/subjects.router");
const papersRouter = require("./api/users/papers.router");
const questionsRouter = require("./api/users/questions.router");
const packagesRouter = require("./api/users/packages.router");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/subjects", subjectsRouter);
app.use("/api/papers", papersRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/packages", packagesRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server running...");
});
