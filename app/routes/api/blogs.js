const express = require("express");
const Blog = require("../../models/Blog");
const router = express.Router();
const validateAddBlogInput = require("../../validation/blog");

// @route GET api/blogs/:id
// @desc Get blog
// @access Public
router.get("/:id", (req, res) => {
  console.log("API GET api/blogs/:id is reached");
  const blogIdID = req.params.id;
  Project.find({ _id: blogIdID }, (err, doc) => {
    res.send(doc);
  });
});

// @route POST api/blogs/add
// @desc Register user
// @access Public
router.post("/add", (req, res) => {
  console.log("API Post api/blogs/add is reached");
  // Form validation
  const { errors, isValid } = validateAddBlogInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newBlog = new Blog({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });
  newBlog
    .save()
    .then((blog) => res.json(blog))
    .catch((err) => console.log(err));
});

module.exports = router;
