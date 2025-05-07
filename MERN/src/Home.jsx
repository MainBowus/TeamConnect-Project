import { Link, useNavigate } from 'react-router-dom';
import './CSS/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
<div className="home-container">
  <div className="background-shapes">
    <div className="shape shape1"></div>
    <div className="shape shape2"></div>
  </div>
  <header className="home-header">
    <div className="home-logo">SYNERLEARN</div>
    <button onClick={handleLogout} className="logout-btn">
      <i className="fas fa-sign-out-alt"></i> ออกจากระบบ
    </button>
  </header>
  <main className="home-content">
    <h1>🎓 ยินดีต้อนรับสู่ Synerlearn</h1>
    <p>แพลตฟอร์มแลกเปลี่ยนทักษะและความรู้ระหว่างผู้เรียน</p>
    <div className="home-buttons">
      <Link to="/post" className="home-btn">➕ แชร์ทักษะของคุณ</Link>
      <Link to="/skills" className="home-btn">🔍 ดูทักษะที่มีอยู่</Link>
    </div>
  </main>
</div>
  );
}

export default Home;