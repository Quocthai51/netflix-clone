const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("server is running on port 8800");
});



