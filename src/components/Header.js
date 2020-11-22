import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex-container">
      <Link to="/user/login">
        <button>Login</button>
      </Link>
      <Link to="/user/profile">Profile</Link>
    </div>
  );
};

export default Header;
