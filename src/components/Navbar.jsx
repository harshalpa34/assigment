import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/add-box" className="nav-link">
            Add Box
          </Link>
        </li>
        <li>
          <Link to="/view-boxes" className="nav-link">
            View Boxes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
