const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contact: String,
  exchange: String,
  category: { 
    type: String, 
    required: true,
    enum: ['Programming', 'Design', 'Language', 'Business', 'Other'], // เพิ่ม 'Other'
  },
});

module.exports = mongoose.model('Post', PostSchema);
