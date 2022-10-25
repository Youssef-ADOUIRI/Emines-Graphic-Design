const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const port = 5000;

const users = require("./routes/api/users");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
const Client = mongoose
  .connect(db, {
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

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

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

app.get("/API/:PrjId", (req, res) => {
  console.log("API is reached");
  const prjID = req.params.PrjId;
  model1.find({}, (err, doc) => {
    res.send(doc);
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
