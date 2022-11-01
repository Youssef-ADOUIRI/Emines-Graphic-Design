const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/:prjId", (req, res) => {
  console.log("API is reached");
  const prjID = req.params.prjId;
  Project.find({}, (err, doc) => {
    res.send(doc);
  });
});

module.exports = router;
