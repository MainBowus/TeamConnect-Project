// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://Synerlearn.onrender.com', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect('mongodb+srv://Synerlearn:456789@synerlearn.nzfeit0.mongodb.net/')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error: ', err));

// --------- Schemas ---------
// Post Schema
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  contact: String,
  exchange: String,
  category: { type: String, required: true },
});

const Post = mongoose.model('Post', PostSchema);

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// --------- Routes ---------
// Get all posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Add a post
app.post('/api/posts', async (req, res) => {
  const { title, description, contact, exchange, category } = req.body;
  const newPost = new Post({ title, description, contact, exchange, category });
  try {
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    
    res.status(500).json({ error: 'Failed to save post' });
  }
});

// Register
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'มีผู้ใช้นี้อยู่แล้ว' });

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'ลงทะเบียนสำเร็จ' });
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในระบบ' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }
    res.json({ message: 'เข้าสู่ระบบสำเร็จ' });
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในระบบ' });
  }
});

// --------- Server Start ---------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
