import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Skills from './Skills';
import axios from 'axios';
import Landing from './Landing';
import Login from './login';
import Register from './register';

function App() {
  const [posts, setPosts] = useState([]);

  // ดึงข้อมูลจาก backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  // เพิ่มโพสต์
  const handlePost = (post) => {
    axios.post('http://localhost:5000/api/posts', post)
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.log(err));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post onPost={handlePost} />} />
        <Route path="/skills" element={<Skills posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
