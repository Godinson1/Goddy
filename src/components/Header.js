import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./scss/index.scss";

export default function Header() {
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
      <div className="headerContainer">
        <div>
          <div className="info">
            <div></div>
            <div>
              <h1 id="text">
                Sofware <br /> Engineer<span id="dot">.</span>
              </h1>
              <span id="desc">
                I consider myself to be one &#128522; as I love to build
                scalable applications that solves everyday problems.
              </span>
            </div>
            <div>
              <div className="line">
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-side">
            <div className="top-right">
              <div className="line"></div>
              <div className="menu"></div>
            </div>
            <div className="content">
              <div className="box">
                <div className="box-in"></div>
              </div>

              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div>
              <div className="socials">
                <div>
                  <div className="gt" id="sm"></div>
                  <div className="tw" id="sm"></div>
                </div>
                <div>
                  <div className="gm" id="sm"></div>
                  <div className="ln" id="sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
