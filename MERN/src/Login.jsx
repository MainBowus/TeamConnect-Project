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
    <>
      <div className="login-bg"></div>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input 
            className="login-input" 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            className="login-input"
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button className="login-button" type="submit">เข้าสู่ระบบ</button>
        </form>
      </div>
    </>
  );
}

export default Login;