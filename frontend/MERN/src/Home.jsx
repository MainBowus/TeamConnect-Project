import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>🎓 แลกเปลี่ยนทักษะง่ายๆ</h1>
        <p>มาแชร์สิ่งที่คุณรู้ และเรียนรู้สิ่งใหม่กับเพื่อนๆ!</p>
        <div className="buttons">
          <a href="/post" className="btn">📤 โพสต์ทักษะของคุณ</a>
          <a href="/skills" className="btn btn-secondary">📚 ดูรายการทั้งหมด</a>
        </div>
      </header>

      <section className="info">
        <h2>🔄 เราเชื่อในพลังของการแบ่งปัน</h2>
        <p>
          เว็บไซต์นี้เปิดให้ทุกคนสามารถโพสต์สิ่งที่ตนเองสามารถสอน และสิ่งที่อยากเรียนรู้
          เพื่อจับคู่แลกเปลี่ยนทักษะกันได้อย่างอิสระ โดยไม่ต้องล็อกอิน
        </p>
      </section>

      <footer className="footer">
        <p>สร้างเพื่อสนับสนุน SDG17: ความร่วมมือเพื่อการพัฒนาที่ยั่งยืน 🌍</p>
      </footer>
    </div>
  );
}
