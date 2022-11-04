const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  cardType: Number,
  parag1: String,
  parag2: String,
  gradient: [{ hex1: String, hex2: String }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  imgs: [
    {
      id: Number,
      path_url: String,
      ext: String,
      alt: String,
    },
  ],
});

module.exports = Project = mongoose.model("merged", UserSchema, "merged");
