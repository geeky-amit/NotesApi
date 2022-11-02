const express = require("express");
const app = express();

const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: __dirname + "/.env" });

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Notes API from COCO");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on port  no. " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
