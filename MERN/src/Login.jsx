import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './CSS/auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/login', { username, password });

      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect ไปยังหน้าที่พยายามจะเข้าหรือหน้า home
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
    } catch (err) {
      alert(err.response?.data?.message || 'เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="auth-container">
      {/* ✅ รูปทรงพื้นหลัง */}
      <div className="background-shapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
      </div>

      <div className="auth-card">
        {/* ✅ ฝั่งซ้าย */}
        <div className="left-panel">
          <h1>SYNER<br /><span>LEARN</span></h1>
          <Link to="/register" className="switch-btn">CREATE ACCOUNT</Link>
        </div>

        {/* ✅ ฝั่งขวา */}
        <div className="right-panel">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">เข้าสู่ระบบ</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
