const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = moongoose.model("Author", authorSchema);
