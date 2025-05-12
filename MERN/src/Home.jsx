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
        <div className="shape shape3"></div>
      </div>
      <header className="home-header">
        <div className="home-logo" onClick={() => navigate('/')}>
          SYNERLEARN<sup>™</sup>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <i className="fas fa-sign-out-alt"></i> ออกจากระบบ
        </button>
      </header>
      <main className="home-content">
        <h1>🌟 ยินดีต้อนรับสู่ <span className="highlight">Synerlearn</span></h1>
        <p>เริ่มต้นการเรียนรู้แบบมีเพื่อนร่วมทาง ✨<br />มาแบ่งปันความรู้ พัฒนาทักษะ และสร้างเครือข่ายของคุณ!</p>
        <div className="home-buttons">
          <Link to="/post" className="home-btn">➕ แชร์ความเชี่ยวชาญของคุณ</Link>
          <Link to="/skills" className="home-btn">🔍 ค้นหาทักษะใหม่ ๆ</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
