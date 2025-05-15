require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', process.env.VITE_API_URL],
  credentials: true
}));
app.use(bodyParser.json());

// ENV
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Connect MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error: ', err));

// --------- Schemas ---------
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  contact: String,
  exchange: String,
  category: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Post = mongoose.model('Post', PostSchema);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// --------- Middleware ตรวจสอบ Token ---------
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token ไม่ถูกส่งมา' });

  try {
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token ไม่ถูกต้อง' });
  }
};

// --------- Routes ---------

// Register
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'ผู้ใช้นี้มีอยู่แล้ว' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
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
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: 'เข้าสู่ระบบสำเร็จ', token });
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในระบบ' });
  }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'ไม่สามารถโหลดโพสต์ได้' });
  }
});

// Add a post (ต้อง login ก่อน)
app.post('/api/posts', verifyToken, async (req, res) => {
  const { title, description, contact, exchange, category } = req.body;
  const newPost = new Post({ title, description, contact, exchange, category, userId: req.userId });
  try {
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'โพสต์ไม่สำเร็จ' });
  }
});

// --------- Server Start ---------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
