const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// เชื่อม MongoDB (คุณต้องเปิด MongoDB Server ด้วยนะ)
mongoose.connect('mongodb+srv://Synerlearn:456789@synerlearn.nzfeit0.mongodb.net/Synerlearndata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error: ', err));

// Schema ของข้อมูลที่โพสต์
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  contact: String,
  exchange: String,
  category: { type: String, required: true }, // เพิ่ม category
});

const Post = mongoose.model('Post', PostSchema);

// API Routes

// ✅ Get all posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// ✅ Add a post
app.post('/api/posts', async (req, res) => {
  const { title, description, contact, exchange, category } = req.body; // เพิ่ม category ในการรับข้อมูล
  const newPost = new Post({ title, description, contact, exchange, category }); // ส่ง category ไปที่ database
  console.log('Received post:', req.body);  // เช็คข้อมูลที่รับมา
  try {
    const savedPost = await newPost.save();
    console.log('New Post Saved:', savedPost);  // เช็คข้อมูลที่บันทึก
    res.status(201).json(savedPost);
  } catch (err) {
    console.error('Error saving post:', err);  // ถ้ามีข้อผิดพลาด
    res.status(500).json({ error: 'Failed to save post' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
