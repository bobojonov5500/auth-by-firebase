import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to={"/"}>Home</Link>
        <div>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
