const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: Number, required: true },
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
});

module.exports = Project = mongoose.model("merged", UserSchema, "merged");
