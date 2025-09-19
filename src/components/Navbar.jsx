import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ query, setQuery, onSearch, onClear }) {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    onSearch();
    navigate("/search");
  };

  const handleClearClick = () => {
    onClear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          Little Lemon
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </div>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search (beach / temple / country)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="btn search-btn">
          Search
        </button>
        <button onClick={handleClearClick} className="btn clear-btn">
          Clear
        </button>
      </div>
    </nav>
  );
}
