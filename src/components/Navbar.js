import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-containr">
        <div className="nav_link">
          <Link to="/#home">
            <p>Home</p>
          </Link>
        </div>
        <div className="nav_link">
          <Link to="/#services">
            <p>Services</p>
          </Link>
        </div>

        <div className="nav_link">
          <Link to="/#about">
            <p>About</p>
          </Link>
        </div>
        <div className="nav_link">
          <Link to="/#contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
