import React from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

export default function Table() {
  return (
    <div>
      <div className="blogs">
        <div>
          <h1 id="text">Yeah, I also write too!!</h1>
        </div>
        <div className="blog-session">
          <Link id="link" to="/article/title">
            <div className="content">
              <div className="details">
                <h5>2020 IN RETROSPECT</h5>
                <span>Published: 2 days ago - 5 min read.</span>
                <br />
                <span> By: JG</span>
              </div>
            </div>
          </Link>
          <Link id="link" to="/article/title">
            <div className="content">
              <div className="details">
                <h5>2020 IN RETROSPECT</h5>
                <span>Published: 2 days ago - 5 min read.</span>
                <br />
                <span> By: JG</span>
              </div>
            </div>
          </Link>
          <Link id="link" to="/article/title">
            <div className="content">
              <div className="details">
                <h5>2020 IN RETROSPECT</h5>
                <span>Published: 2 days ago - 5 min read.</span>
                <br />
                <span> By: JG</span>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <button className="btn">SEE MORE</button>
        </div>
      </div>
    </div>
  );
}
