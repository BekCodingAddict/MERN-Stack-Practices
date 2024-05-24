const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://bekcodingaddict:Otabek97@expressbus.lorhvlo.mongodb.net/MatchingPairs"
);

app.get("/get-users", async (req, res) => {
  const datas = await UserModel.find();
  res.status(200).json(datas);
});

app.post("/add-user", async (req, res) => {
  const data = new UserModel({
    name: req.body.name,
    age: req.body.age,
    userName: req.body.userName,
  });
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${3001}!`);
});
