import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { isUserLoggedIn, logout, isAdminUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import "./StyleComponent.css";

const HeaderComponent = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const isAuth = isUserLoggedIn();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const admin = await isAdminUser();
          setIsAdmin(admin);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    checkAdminStatus();
  }, []);

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
                  <li className="btn">
                    <NavLink to="/login" className="nav-link btn control">
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
