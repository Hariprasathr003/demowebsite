import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../components/SearchContext.jsx";
import "../assets/style/pages/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { setSearchItem } = useContext(Search);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    const trimmed = searchInput.trim();
    if (trimmed) {
      setSearchItem(trimmed);
      setSearchInput("");
      navigate("/searchbar");
    }
  };
  return (
    <nav className="navbar">
      <div className="navbarsection">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>

        <div className="sidemenu">
          <div className="searchbox">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search name..."
              className=""
            />
            <button onClick={handleSearch} className="">
              Search
            </button>
          </div>

          <button className="loginbtn" onClick={() => navigate("/login")}>
            Login
          </button>

          <button className="registerbtn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
