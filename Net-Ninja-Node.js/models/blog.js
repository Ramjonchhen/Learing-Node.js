const mongoose = require("mongoose");

const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: "string",
      require: true,
    },
    snippet: {
      type: "string",
      require: true,
    },
    body: {
      type: "string",
      require: true,
    },
  },
  { timestamps: true }
);

// creating the blog model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
