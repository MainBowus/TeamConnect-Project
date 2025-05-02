import { Link } from 'react-router-dom';
import './CSS/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>🎓 ยินดีต้อนรับสู่ Synerlearn</h1>
      <p>แพลตฟอร์มแลกเปลี่ยนทักษะและความรู้ระหว่างผู้เรียน</p>
      <div className="home-buttons">
        <Link to="/post" className="home-btn">➕ แชร์ทักษะของคุณ</Link>
        <Link to="/skills" className="home-btn">🔍 ดูทักษะที่มีอยู่</Link>
      </div>
    </div>
  );
}

export default Home;
