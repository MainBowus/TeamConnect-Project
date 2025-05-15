const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const { title, description, contact, exchange, category } = req.body; // รับ category
  try {
    const newPost = new Post({ title, description, contact, exchange, category }); // ส่ง category ไปที่ database
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: 'Error saving post' });
  }
});

module.exports = router;
