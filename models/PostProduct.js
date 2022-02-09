const mongoose = require("mongoose");

const PostProduct = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  imgUrl: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  isBoolen: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Posts", PostProduct);
