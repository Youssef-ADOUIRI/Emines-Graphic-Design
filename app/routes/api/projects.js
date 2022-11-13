const express = require("express");
const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const router = express.Router();
const Project = require("../../models/Project");
const path = require("path");
const validateAddProjectInput = require("../../validation/project");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, uuid4() + "_" + Date.now() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, filefilter });

// @route POST api/projects/add
// @desc add project
// @access Public
router.post("/add", upload.array("uploadedImages", 9), (req, res , err) => {
  console.log("API POST api/projects/add is reached");
  const { errors, isValid } = validateAddProjectInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  console.log(err);

  // let newPrjJSON = {
  //   title: req.body.title,
  //   owner: req.body.owner,
  //   cardType: req.body.cardType ? req.body.cardType : 0,
  //   parag1: req.body.parag1,
  //   parag2: req.body.parag2,
  //   hex1: req.body.hex1,
  //   hex2: req.body.hex2,
  //   hidden: req.body.hidden ? true : false,
  // };

  // const newProject = new Project(newPrjJSON);
  // newProject
  //   .save()
  //   .then((project) => res.json(project))
  //   .catch((err) => console.log(err));
});

// @route GET api/projects/get/:id
// @desc get project
// @access Public
router.get("/get/:id", (req, res) => {
  console.log("API GET api/projects/get/:id is reached");
  const prjID = req.params.id;
  if (prjID >= 0)
    Project.find({ _id: prjID }, (err, doc) => {
      res.send(doc);
    });
  else {
    Project.find({}, (err, doc) => {
      res.send(doc);
    });
  }
});

module.exports = router;
