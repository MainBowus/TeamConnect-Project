import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();

  if (!isLoggedIn) {
    // บันทึกตำแหน่งที่พยายามจะเข้าเพื่อ redirect กลับหลังล็อกอิน
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;