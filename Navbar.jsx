import { Link, NavLink } from "react-router-dom";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand">
          <div className="brand-icon">
            <Scale size={22} />
          </div>

          <div>
            <span className="brand-name">Subazz</span>
            <span className="brand-product">LegalEase</span>
          </div>
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/generator" onClick={() => setMenuOpen(false)}>
            Generate
          </NavLink>

          <NavLink to="/documents" onClick={() => setMenuOpen(false)}>
            My Documents
          </NavLink>

          <NavLink to="/assistant" onClick={() => setMenuOpen(false)}>
            AI Assistant
          </NavLink>

          <NavLink
            to="/login"
            className="nav-login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
