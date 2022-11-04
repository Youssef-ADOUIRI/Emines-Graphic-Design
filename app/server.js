const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const port = 5000;

const users = require("./routes/api/users");
const projects = require("./routes/api/projects");

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
      console.error("Cannot connect to the database : " + err);
    }
  );

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/projects", projects);

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
