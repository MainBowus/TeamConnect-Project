import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agree) {
      alert("Please accept the terms.");
      return;
    }

    axios.post('http://localhost:3001/register', {
      name: username,
      email,
      password
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>แลกเปลี่ยนทักษะผ่าน</h2>
        <h1><span className="highlight">SYNERLEARN</span></h1>
      </div>
      <div className="signup-form-box">
        <h2 className="signup-title">สร้างบัญชี</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

          <label>Email address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <div className="checkbox-row">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
            <span>ยอมรับเงื่อนไข</span>
          </div>

          <button type="submit">สร้างบัญชี</button>

          <p className="login-link">มีบัญชีแล้วใช่ไหม? <Link to="/login">เข้าสู่ระบบ</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
