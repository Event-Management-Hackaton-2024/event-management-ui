import React from "react";
import { NavLink } from "react-router-dom";
import { isAdminUser, isUserLoggedIn, logout } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import "./StyleComponent.css";

const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser();
  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator("/login");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar">
          <div className="container">
            <a href="http://localhost:3000" className="navbar-brand m-2">
              Networking Platform
            </a>
            <div className="collapse navbar-collapse p-1">
              <ul className="navbar-nav ms-auto me-3">
                {" "}
                {/* "ms-auto" aligns items to the right */}
                {isAdmin && (
                  <li className="nav-item m-3">
                    <NavLink to="/admin/products" className="nav-link">
                      АДМИН - СЪБИТИЯ
                    </NavLink>
                  </li>
                )}
                <li className="nav-item m-3">
                  <NavLink to="/all-events" className="nav-link">
                    СЪБИТИЯ
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink to="/my-profile" className="nav-link">
                    МОЯТ ПРОФИЛ
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav m-3">
                {!isAuth && (
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                )}
                {!isAuth && (
                  <li className="btn">
                    <NavLink to="/login" className="nav-link btn control">
                      Login
                    </NavLink>
                  </li>
                )}
                {isAuth && (
                  <li className="btn">
                    <NavLink to="/login" className="nav-link btn control " onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
