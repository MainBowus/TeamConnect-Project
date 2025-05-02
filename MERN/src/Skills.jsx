import { Link } from 'react-router-dom';
import './CSS/Skills.css';

function Skills({ posts }) {
  return (
    <div className="skills-page">
      <header className="navbar">
        <h2>🔍 ทักษะทั้งหมด</h2>
        <div className="nav-links">
          <Link to="/">🏠 Home</Link>
          <Link to="/post">➕ โพสต์ทักษะ</Link>
        </div>
      </header>

      <div className="post-list">
        {posts.length === 0 ? (
          <p className="no-posts">ยังไม่มีโพสต์ในขณะนี้</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p><strong>หมวดหมู่:</strong> {post.category}</p> {/* แสดง category */}
              <div className="post-details">
                {post.exchange && <p><strong>ต้องการแลกกับ:</strong> {post.exchange}</p>}
                {post.contact && <p><strong>ติดต่อ:</strong> {post.contact}</p>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Skills;
