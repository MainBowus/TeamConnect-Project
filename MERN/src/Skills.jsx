import { Link, useNavigate } from 'react-router-dom';
import './CSS/Skills.css';

function Skills({ posts }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="skills-page">
      {/* ส่วนหัวเว็บ */}
      <header className="page-header">
        <Link to="/Home" className="logo">SYNERLEARN<sup>™</sup></Link>
        
        <nav className="main-menu">
          <Link to="/news" className="menu-item">ข่าวสาร</Link>
          <Link to="/contact" className="menu-item">ติดต่อทีมงาน</Link>
          <Link to="/about" className="menu-item">เกี่ยวกับเรา</Link>
        </nav>
        
        <button 
          onClick={handleAuthClick} 
          className="auth-button"
        >
          {isLoggedIn ? 'ออกจากระบบ' : 'เข้าสู่ระบบ'}
        </button>
      </header>

      {/* ส่วนเนื้อหาหลัก */}
      <main className="content-container">
        <h1 className="section-title">ดูทักษะที่มี</h1>
        
        <div className="skills-list">
          {posts.length === 0 ? (
            <p className="empty-message">ยังไม่มีทักษะที่แสดงในขณะนี้</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="skill-card">
                <h2 className="skill-title">{post.title}</h2>
                <p className="skill-description">{post.description}</p>
                
                {post.exchange && (
                  <div className="exchange-info">
                    <span className="info-label">ทักษะที่อยากแลกเปลี่ยน:</span>
                    <span className="info-value">{post.exchange}</span>
                  </div>
                )}
                
                {post.contact && (
                  <div className="contact-info">
                    <span className="info-label">ช่องทางติดต่อ:</span>
                    <span className="info-value">{post.contact}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Skills;
