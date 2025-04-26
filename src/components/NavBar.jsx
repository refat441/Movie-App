import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navabar">
      <div className="navbar-brand">
        <Link to="/"> Movie </Link>
      </div>
      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorite" className="nav-link">
          Favorite
        </Link>
        <Link to="/clicked" className="nav-link">
          clicked
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
