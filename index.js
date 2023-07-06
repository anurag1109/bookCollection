const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const cors = require("cors");
app.use(cors());
const { connection } = require("./Configs/db");

const router = require("./routes/bookRoutes");

app.use("/books", router);
app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running at port ${process.env.port}`);
});
