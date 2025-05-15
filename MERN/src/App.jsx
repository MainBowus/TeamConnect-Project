import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Post from './Post';
import Skills from './Skills';

import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import About from './About';

import '@fortawesome/fontawesome-free/css/all.min.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error('Error loading posts:', err));
  }, []);

  const handlePost = (post) => {
    const token = localStorage.getItem('token');
    axios.post(`${API_URL}/api/posts`, post, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setPosts(prev => [...prev, res.data]))
      .catch(err => console.error('Error posting:', err));
};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post" element={
          <PrivateRoute>
            <Post onPost={handlePost} />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills posts={posts} />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
