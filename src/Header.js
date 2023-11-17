import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerStyle = {
    backgroundColor:
      isScrolled || (isSmallScreen && isOpen) ? "black" : "transparent",
  };

  return (
    <header
      className={`header ${isOpen ? "header-visible" : ""}`}
      style={headerStyle}
    >
      <h1>BLOGS</h1>
      <ul className={` header-ul ${!isOpen ? "notopen" : ""}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/post">POST</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/">SERVICES</Link>
          <div className="dropdown-content">
            <div className="dropdown-row">
              <div className="dropdown-column">
                <a href="#" style={{ color: "#000" }}>
                  Events
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Developers
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Partners
                </a>
              </div>
              <div className="dropdown-column">
                <a href="#" style={{ color: "#000" }}>
                  Security
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Support
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Program
                </a>
              </div>
              <div className="dropdown-column">
                <a href="#" style={{ color: "#000" }}>
                  Guide
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Academy
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Management
                </a>
              </div>
              {/* <div className="dropdown-column">
                <a href="#" style={{ color: "#000" }}>
                  Link 1
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Link 2
                </a>
                <a href="#" style={{ color: "#000" }}>
                  Link 3
                </a>
              </div> */}
            </div>
          </div>
        </li>
      </ul>
      {!isOpen && <FaBars className="fabars" onClick={toggleNavbar} />}
      {isOpen && <FaTimes className="facross" onClick={toggleNavbar} />}
    </header>
  );
};

export default Header;
