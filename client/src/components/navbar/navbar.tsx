import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const handleClick = () => [
    setShowDashboard(!showDashboard)
  ]
  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <img src="/tuf.svg" alt="" />
        </div>
        <div className="navLinks">
          {showDashboard ? (
            <Link to="/" onClick={handleClick}>
              <button onClick={handleClick}>Home</button>
            </Link>
          ) : (
            <Link to="/dashboard" onClick={handleClick}>
              <button onClick={handleClick}>Dashboard</button>
            </Link>
          )}
          <div className="profile">
            <img src="/tuf.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
