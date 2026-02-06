import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import Img from "../Navbar/Img/Header.png";
import logoImg from "../Navbar/Img/Logo.png";
import iconImg from "../Navbar/Img/Icon@2x.png";

const Navbar = () => {
  const [removeBannerText, setRemoveBannerText] = useState(true);
  const handleRemove = () => {
    setRemoveBannerText("");
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const onDocumentClick = (e) => {
      if (!menuOpen) return;
      const target = e.target;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("touchstart", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("touchstart", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);
  return (
    <div className="navbar">
      <div className="navbarContainer">
        {/* <div> */}
          <div className="navbarWrapper">
            <img className="bannerImage" src={Img} alt="banner" />
          </div>
          {removeBannerText ? (
            <div className="bannerTextContainer">
              <p className="bannerText">
                ✨Discover Your Dream Property Estatein
                <span className="underline">LearnMore</span>
                <span onClick={handleRemove} className="cancelIcon">
                  x
                </span>
              </p>
            </div>
          ) : (
            setRemoveBannerText
          )}

          <div className="navLogoContainer">
            <div className="navLogo">
              <div className="logoImage-container">
                <img className="logoImg" src={logoImg} alt="" />
              </div>
              <img
                ref={toggleRef}
                onClick={handleMenu}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMenu();
                  }
                }}
                className="iconImg"
                src={iconImg}
                alt="menu toggle"
                role="button"
                tabIndex={0}
                aria-expanded={menuOpen}
              />
            </div>
            <div
              ref={menuRef}
              className={`menuItems ${menuOpen ? "open" : ""}`}
            >
              <li>
                <a href="#" className="menuLink">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="menuLink">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="menuLink">
                  Properties
                </a>
              </li>

               <li>
                <a href="#" className="menuLink">
                  Services
                </a>
              </li>

               <li className="contact">
                <a href="#" className="menuLink">
                  Contact
                </a>
              </li>
             
            </div>
            
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
