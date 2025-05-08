import React from 'react';
import './CSS/Home.css';

const About = () => {
  return (
    <div className="home-container">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>

      <header className="home-header">
        <div className="home-logo">SYNERLEARN<sup>™</sup></div>
      </header>

      <main className="home-content">
        <h1>เกี่ยวกับเรา</h1>
        <p>
          <span className="highlight">Synerlearn</span> เป็นแพลตฟอร์มที่มุ่งเน้นการสร้างชุมชนการเรียนรู้ร่วมกัน 
          เพื่อช่วยให้ผู้คนสามารถพัฒนาทักษะในด้านต่าง ๆ ได้อย่างสนุกสนานและง่ายดาย
        </p>
        <p>
          เราเชื่อว่าการเรียนรู้ไม่ควรเกิดขึ้นเพียงลำพัง และการแบ่งปันความรู้คือกุญแจสำคัญในการพัฒนาตนเองและสังคม
        </p>

        <section className="about-team">
          <h2>MEMBERS</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/public/user.png" alt="Member 1" />
              <h3>AMONTEP JERAMANAPONG</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
              <img src="/public/children.jpg" alt="Member 2" />
              <h3>Nathachapong Surasitthanathorn</h3>
              <p>Documentation</p>
            </div>
            <div className="team-member">
              <img src="/public/children.jpg" alt="Member 2" />
              <h3>Nathachapong Surasitthanathorn</h3>
              <p>Documentation</p>
            </div>
            <div className="team-member">
              <img src="/public/children.jpg" alt="Member 2" />
              <h3>Nathachapong Surasitthanathorn</h3>
              <p>Documentation</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <p>&copy; 2025 Synerlearn | สร้างโดยทีม Synerlearn</p>
      </footer>
    </div>
  );
};

export default About;