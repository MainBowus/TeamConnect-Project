import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/auth.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });
      alert('ลงทะเบียนสำเร็จ!');
      navigate('/');
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
          <a href="/login" className="switch-btn">SIGN IN</a>
        </div>
        
        <div className="right-panel">
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>
              <input type="checkbox" required /> ยอมรับเงื่อนไข
            </label>
            <button type="submit">สร้างบัญชี</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;