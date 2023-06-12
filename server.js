const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const user = require("./router/userRoute");
app.use(express.json());

app.use(cors());

app.use("/api/", user);

app.listen(
  process.env.PORT,
  console.log(`server start at port ${process.env.PORT}`)
);
