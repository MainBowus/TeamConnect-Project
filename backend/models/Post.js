const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contact: String,
  exchange: String,
  category: { type: String, required: true }, // เพิ่ม category
});

module.exports = mongoose.model('Post', PostSchema);
