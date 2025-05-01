import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', {
      identifier,
      password,
      rememberMe
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>แลกเปลี่ยนทักษะผ่าน</h2>
        <h1><span className="highlight">SYNERLEARN</span></h1>
      </div>
      <div className="login-form-box">
        <h2 className="login-title">เข้าสู่ระบบ / สร้างบัญชี</h2>
        <form onSubmit={handleSubmit}>
          <label>Username or Email address</label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="checkbox-row">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember Me</span>
          </div>

          <button type="submit">ลงชื่อเข้าใช้</button>

          <div className="login-links">
            <Link to="/register">สร้างบัญชี</Link>
            <Link to="/forgot-password">ลืมรหัสผ่าน?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
