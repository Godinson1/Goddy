import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import style
import "./scss/index.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(!nav);

  useEffect(() => {
    if (nav) {
      document.getElementById("myNav").style.width = "100%";
    } else {
      document.getElementById("myNav").style.width = "0%";
    }
  }, [nav]);

  return (
    <div>
      <div id="myNav" className="overlay">
        <div className="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/resume">Download Resume</Link>
          <Link to="/message">Message</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </div>
      <div className="nav">
        <div className="logo-menu">
          <h1 id="logo">
            <Link id="logo" to="/">
              JG{" "}
            </Link>
          </h1>
        </div>
        <div className="nav-menu">
          <li className="menu-icon" onClick={openNav}>
            {nav ? (
              <div className="menu">
                <div className="menu-close">
                  <h1>x</h1>
                </div>
              </div>
            ) : (
              <div className="menu">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </div>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
