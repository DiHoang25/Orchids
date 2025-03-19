import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthChange, signOutUser } from "../firebase";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Orchid Paradise 🌸
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Trang chủ</Link>
          </li>
          <li className="nav-item">
            <Link to="/detail" className="nav-links">Chi tiết</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Liên hệ</Link>
          </li>
          {user ? (
            <>
              <li className="nav-item user-info">
                <span>Xin chào, {user.displayName}</span>
              </li>
              <li className="nav-item">
                <button onClick={signOutUser} className="nav-links">Đăng xuất</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-links">Đăng nhập</Link>
            </li>
          )}
        </ul>
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
