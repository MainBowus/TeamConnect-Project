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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // เก็บ token และสถานะ login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', response.data.token);

      // นำทางกลับหน้าที่เคยพยายามเข้าก่อน login
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
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
          <Link to="/register" className="switch-btn">CREATE ACCOUNT</Link>
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
