const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const taskRouter = require("./routes/taskRouter");
// const {router = './routes/taskRouter.js'
const mongoose = require("mongoose");
const routeNotFound = require("./middleware/404");
require("dotenv").config();
app.use(express.json());
// extended stops derecation err
app.use(express.urlencoded({ extended: true }));

console.log(process.env.test);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // console.log("DB CONNECTED")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use(taskRouter);
app.use(routeNotFound);

//schema
//title - string, required, unique, minlenght-5
//description - string, required,
//completed - boolean, default - false
// timestamps
