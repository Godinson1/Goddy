import React from "react";
import { Back } from "./helpers";

export default function Work({ history }) {
  return (
    <div>
      <Back />
      <div className="projects">
        <h1 id="text">/Projects</h1>
        <div className="work">
          <div className="project">
            <div className="name">
              <h1>MONEYBIZZ</h1>
            </div>
            <div className="desc">
              A fintech app that aid users to save, invest and transfer money to
              loved ones
            </div>
          </div>
          <div className="project">
            <div className="name">
              <h1>BANTED</h1>
            </div>
            <div className="desc">
              A Social App that connects football lovers and where banter is
              experienced like never before.
            </div>
          </div>

          <div
            className="project"
            onClick={() =>
              window.open("https://closesearch.herokuapp.com/", "_blank")
            }
          >
            <div className="name">
              <h1>CLOSESEARCH</h1>
            </div>
            <div className="desc">
              Find hospitals, clinics and medical offices close to you without
              hassle.
            </div>
          </div>

          <div className="project">
            <div className="name">
              <h1>NAIJA SCHOLAR</h1>
            </div>
            <div className="desc">
              An app that helps life easy for naija students..
            </div>
          </div>
          <div className="project">
            <div className="name">
              <h1>SKETCH APP</h1>
            </div>
            <div className="desc">
              A sketch app for making wishes to loved ones.
            </div>
          </div>
          <div className="project">
            <div className="name">
              <h1>TAX PLATFORM</h1>
            </div>
            <div className="desc">
              A financial app that aids user to get loans
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
