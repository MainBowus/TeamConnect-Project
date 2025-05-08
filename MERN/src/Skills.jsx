import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Skills.css';

function Skills({ posts }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(''); // สร้าง state สำหรับหมวดหมู่ที่เลือก

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  // ฟังก์ชันสำหรับเปลี่ยนหมวดหมู่ที่เลือก
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // กรองโพสต์ตามหมวดหมู่ที่เลือก
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className="skills-page">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
      <header className="page-header">
        <Link to="/Home" className="logo">SYNERLEARN<sup>™</sup></Link>
        <nav className="main-menu">
          <Link to="/" className="menu-item">ข่าวสาร</Link>
          <Link to="/contact" className="menu-item">ติดต่อทีมงาน</Link>
          <Link to="/about" className="menu-item">เกี่ยวกับเรา</Link>
        </nav>
        <button onClick={handleAuthClick} className="auth-button">
          {isLoggedIn ? 'ออกจากระบบ' : 'เข้าสู่ระบบ'}
        </button>
      </header>
      <main className="content-container">
        <h1 className="section-title">ดูทักษะที่มี</h1>

        {/* ตัวเลือกหมวดหมู่ */}
        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('')}
          >
            ทั้งหมด
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Programming' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Programming')}
          >
            Programming
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Design' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Design')}
          >
            Design
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Language' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Language')}
          >
            Language
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Business' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Business')}
          >
            Business
          </button>
        </div>

        <div className="skills-list">
          {filteredPosts.length === 0 ? (
            <p className="empty-message">ยังไม่มีทักษะที่แสดงในขณะนี้</p>
          ) : (
            filteredPosts.map((post, index) => (
              <div key={index} className="skill-card">
                <h2 className="skill-title">{post.title}</h2>
                <p className="skill-description">{post.description}</p>
                {post.category && (
                  <div className="category-info">
                    <span className="info-label">หมวดหมู่:</span>
                    <span className="info-value">{post.category}</span>
                  </div>
                )}
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