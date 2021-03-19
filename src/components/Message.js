import React, { useEffect } from "react";
import { Back } from "./helpers";
import "./scss/index.scss";

export default function Message() {
  return (
    <div>
      <div className="message">
        <div>
          <h1 id="text">Have a message for me?</h1>
          <span>
            Got a Job Oppotunity, Proposal, or a Question or you just want to
            say Hello?
          </span>
        </div>
        <div className="input">
          <div className="name">
            <div>
              <label>Your Name</label>
            </div>
            <input text="input" id="input" placeholder="Enter Name" />
          </div>
          <div className="email">
            <div>
              <label>Your Email Address</label>
            </div>
            <input text="email" id="input" placeholder="Enter email" />
          </div>
        </div>
        <div id="message">
          <div>
            <label>Your Message</label>
          </div>
          <input
            text="textarea"
            height="400"
            id="input"
            placeholder="Enter message"
          />
        </div>
        <div>
          <button className="btn">SEND MESSAGE</button>
        </div>
        <div className="socials">
          <div className="gt" id="sm"></div>
          <div className="tw" id="sm"></div>
          <div className="gt" id="sm"></div>
          <div className="tw" id="sm"></div>
        </div>
      </div>
    </div>
  );
}
