import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <div className="work-resume">
        <div className="work">
          <div className="work-cont">
            <div>
              <span className="check">Check some of my projects</span>
            </div>
            <div>
              <span>
                See some of the past projects I've worked on.. Includes
                web/mobile apps and some basic experimentals
              </span>
            </div>
            <Link to="/projects">
              <div>
                <button className="btn">SEE MY WORK ---&gt;</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="resume">
          <div className="work-cont">
            <div>
              <h1 className="check">PROJECT MANAGEMENT</h1>
            </div>
            <div>
              <p>
                Have that wonderful idea? We can hop onto it and bring it to
                life with industry standard structuring that will enable it last
                and scale with time
              </p>
            </div>
            <Link to="/message">
              <div className="btn-cont">
                <button className="btn">SEND ME A MESSAGE ---&gt;</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
