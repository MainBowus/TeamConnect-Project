import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Post from './Post';
import Skills from './Skills';

import Landing from './Landing';
import Login from './login';
import Register from './register';

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);


  const handlePost = (post) => {
    axios.post('http://localhost:5000/api/posts', post)
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/skills" element={<Skills posts={posts} />} />

        {/* ใช้ PrivateRoute สำหรับหน้าที่ต้องล็อกอิน */}
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/post" element={
          <PrivateRoute>
            <Post onPost={handlePost} />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
