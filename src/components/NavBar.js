import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const NavBar = () => {
  const { auth } = useAuth();

  return (

    <div class="container">
      <nav class="d-flex flex-wrap justify-content-center py-3 mb-0 border-bottom">
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span class="fs-4"><strong>SLTRCE Election Co.</strong></span>
        </Link>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to="/" class="nav-link ">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/election" class="nav-link">Elections</Link>
          </li>
          <li class="nav-item">
            {auth.uname ? (
              <Link to="/profile" class="nav-link">{auth.uname}</Link>
            ) : (
              <Link to="/auth" class="nav-link">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>


  );
};

export default NavBar;
