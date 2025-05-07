
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // ลบสถานะการล็อกอิน
    navigate('/'); // กลับไปหน้า Landing
  };
  return (
    <div className="landing-wrapper">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <header className="top-bar">
        <div className="logo">SYNERLEARN<sup>™</sup></div>
        <nav className="menu">
          <a href="#">ข่าวสาร</a>
          <a href="#">ติดต่อทีมงาน</a>
          <a href="#">อื่น...</a>
        </nav>

        {/* ปุ่มเข้าสู่ระบบ/ออกจากระบบ */}
        {isLoggedIn ? (
          <button className="auth-btn logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> ออกจากระบบ
          </button>
        ) : (
          <button className="auth-btn login-btn" onClick={() => navigate('/login')}>
            <i className="fas fa-user"></i> เข้าสู่ระบบ
          </button>
        )}
      </header>

      <main className="main-content">
        <section className="welcome">
          <h1>WELCOME TO SYNERLEARN !!!</h1>
          <p>ชุมชนออนไลน์สำหรับผู้ที่สนใจในหัวข้อเฉพาะทาง</p>
          <p>ไม่ว่าคุณจะหลงใหลในโปรแกรมมิ่ง เกมดีไซน์ หรือภาษาเฉพาะทาง</p>
          <p>ที่นี่คือที่ที่คุณจะได้พบเพื่อนที่เข้าใจ และเรียนรู้ไปพร้อมกัน</p>
          <p>เพราะการเรียนรู้ไม่ควรเกิดขึ้นเพียงลำพัง</p>

          <div className="center-buttons">
            <button className="btn primary" onClick={() => navigate('/register')}>ลงทะเบียน</button>
            <button className="btn secondary" onClick={() => navigate('/skills')}>ดูทักษะที่มี</button>
          </div>
        </section>

        <aside className="news">
          <div className="news-box title">พื้นที่โฆษณา</div>
          <div className="news-box title">พื้นที่โฆษณา</div>
          <div className="news-box title">พื้นที่โฆษณา</div>
        </aside>

        <div className="bottom-left-logo">
          <img src="/public/logo.png" alt="SYNERLEARN Logo" />
        </div>
      </main>
    </div>
  );
};

export default Landing;
