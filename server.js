const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mb = require("mongoose");
const cart = require("./routers/cart");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyparser.json());

mb.connect(process.env.MB_URL, {})
  .then(console.log("mb conntected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("helloAsr");
});
app.use("/getter", cart);

const port = process.env.PORT || 5454;

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
