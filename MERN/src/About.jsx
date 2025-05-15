import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import './CSS/Home.css';

const About = () => {
  const navigate = useNavigate(); // สร้างตัวแปร navigate

  return (
    <div className="about-container">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <header className="home-header">
        {/* เพิ่ม onClick เพื่อให้คลิกแล้วนำทางไปหน้า Home */}
        <div className="home-logo" onClick={() => navigate('/')}>
          SYNERLEARN<sup>™</sup>
        </div>
      </header>

      <main className="home-content">
        <h1 className="about-title">เกี่ยวกับเรา</h1>

        <section className="about-vision">
          <h2>วิสัยทัศน์และพันธกิจ</h2>
          <p>
            <span className="highlight">Synerlearn</span> มุ่งมั่นที่จะสร้างชุมชนการเรียนรู้ที่ยั่งยืน 
            โดยเน้นการแบ่งปันความรู้และการพัฒนาทักษะในหลากหลายด้าน 
            เพื่อช่วยให้ผู้คนสามารถเติบโตไปพร้อมกันในโลกยุคดิจิทัล
          </p>
        </section>

        <section className="about-features">
          <h2>คุณสมบัติเด่นของเรา</h2>
          <ul>
            <li>📚 การแลกเปลี่ยนทักษะกับผู้ที่มีความสนใจเหมือนกัน</li>
            <li>🔍 การค้นหาผู้เชี่ยวชาญในหลากหลายสาขา</li>
            <li>🤝 การสร้างเครือข่ายและชุมชนที่แข็งแกร่ง</li>
          </ul>
        </section>

        <section className="about-story">
          <h2>เรื่องราวของเรา</h2>
          <p>
            Synerlearn เริ่มต้นจากความเชื่อที่ว่าการเรียนรู้ไม่ควรเกิดขึ้นเพียงลำพัง 
            ทีมงานของเรามุ่งมั่นที่จะสร้างพื้นที่ที่ทุกคนสามารถแบ่งปันความรู้ 
            และพัฒนาทักษะไปพร้อมกัน
          </p>
        </section>

        <section className="about-team">
          <h2>ทีมงานของเรา</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/public/mark.jpg" alt="Member 1" />
              <h3>AMONTEP JERAMANAPONG</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
              <img src="/public/rarm.jpg" alt="Member 2" />
              <h3>NUTTHAKIT SAELIM</h3>
              <p>Business/System Analyst</p>
            </div>
             <div className="team-member">
              <img src="/public/kiw.jpg" alt="Member 2" />
              <h3>RATTHASAT NGAMKKHUN</h3>
              <p>Frontend Developer</p>
            </div>
             <div className="team-member">
              <img src="/public/pun.jpg" alt="Member 2" />
              <h3>NATHAACHAPONG SURASITTHANATHORN</h3>
              <p>Documentation</p>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <h2>ติดต่อเรา</h2>
          <p>📧 อีเมล: contact@synerlearn.com</p>
          <p>📱 โซเชียลมีเดีย: @synerlearn</p>
        </section>
      </main>

      <footer className="about-footer">
        <p>&copy; 2025 Synerlearn | สร้างโดยทีม Synerlearn</p>
      </footer>
    </div>
  );
};

export default About;