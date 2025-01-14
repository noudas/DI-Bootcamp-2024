import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiBaseUrl}/api/user/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};
export default Navbar;
