const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Client = mongoose
  .connect("mongodb://localhost:27017/EGD_db", {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Cannot connect to the database : " + err);
    }
  );
const model1 = mongoose.model(
  "Merged",
  new mongoose.Schema({
    id: Number,
    nom: String,
    imgs: [
      {
        id: Number,
        path_url: String,
        ext: String,
        width: Number,
        height: Number,
        alt: String,
      },
    ],
  }),
  "merged"
);

app.get("/API/:PrjId",  (req, res) => {
  const prjID = req.params.PrjId;
  model1.find({}, (err, doc) => {
    res.send(doc);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
