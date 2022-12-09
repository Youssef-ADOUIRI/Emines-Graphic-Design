const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const fileupload = require("express-fileupload");

const port = process.env.PORT || 5000;

const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const testconnection = require("./routes/api/connectionTest");

app.use(cors());
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: false }));

app.use("/public/images", express.static(__dirname + "/public/images/"));

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
app.use("/api/testconnection", testconnection);
app.use("/api/users", users);
app.use("/api/projects", projects);

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
  });
});
