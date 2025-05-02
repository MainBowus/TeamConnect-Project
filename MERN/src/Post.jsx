import { useState } from 'react';
import './CSS/Post.css';

function Post({ onPost }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    contact: '',
    exchange: '',
    category: '', // เพิ่ม category
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost(form);
    setForm({ title: '', description: '', contact: '', exchange: '', category: '' });
  };

  return (
    <div className="post-container">
      <h2>📢 แชร์ทักษะของคุณ</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="📝 ชื่อทักษะ"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="📄 รายละเอียดเกี่ยวกับทักษะของคุณ"
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">เลือกหมวดหมู่</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Language">Language</option>
          <option value="Business">Business</option>
        </select>
        <input
          name="exchange"
          value={form.exchange}
          onChange={handleChange}
          placeholder="🔄 ทักษะที่อยากแลกเปลี่ยน"
        />
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="📱 ช่องทางติดต่อ (เช่น Line, IG, Email)"
        />
        <button type="submit">โพสต์เลย 🚀</button>
      </form>
    </div>
  );
}

export default Post;
