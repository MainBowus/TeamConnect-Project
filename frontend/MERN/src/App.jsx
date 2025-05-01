import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";      // ✅ แก้ชื่อให้ถูก
import Post from "./Post";
import Skills from "./Skills";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

