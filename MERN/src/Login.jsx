import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login', { username, password });
      alert('เข้าสู่ระบบสำเร็จ');
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.message || 'เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="auth-container">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
      
      <div className="auth-card">
        <div className="left-panel">
          <h1>SYNER<br /><span>LEARN</span></h1>
          <a href="/register" className="switch-btn">CREATE ACCOUNT</a>
        </div>
        
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