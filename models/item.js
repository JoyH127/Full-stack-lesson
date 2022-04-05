const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    title: { type: String, require: true },
    link: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", Item);
