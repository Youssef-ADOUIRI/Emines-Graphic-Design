const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const validateAddProjectInput = require("../../validation/project");

// @route POST api/projects/add
// @desc add project
// @access Public
router.post("/add", (req, res) => {
  console.log("API POST api/projects/add is reached");
  const { errors, isValid } = validateAddProjectInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let newPrjJSON = {
    title: req.body.title,
    owner: req.body.owner,
    cardType: req.body.cardType ? req.body.cardType : 0,
    parag1: req.body.parag1,
    parag2: req.body.parag2,
    hex1: req.body.hex1,
    hex2: req.body.hex2,
    hidden: req.body.hidden ? true : false,
    imgs: req.body.imgs,
  };

  const newProject = new Project(newPrjJSON);
  newProject
    .save()
    .then((project) => res.json(project))
    .catch((err) => console.log(err));
});

// @route GET api/projects/get/:id
// @desc get project
// @access Public
router.get("/get/:id", (req, res) => {
  console.log("API GET api/projects/get/:id is reached");
  const prjID = req.params.id;
  Project.find({ _id: prjID }, (err, doc) => {
    res.send(doc);
  });
});

module.exports = router;
