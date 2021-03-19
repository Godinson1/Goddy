import React from "react";
import "./scss/index.scss";

export default function Article() {
  return (
    <div>
      <div className="article">
        <div>
          <h1 id="text">2020 IN RETROSPECT</h1>
        </div>
        <div className="contents">
          <image src="/assets/images/fans.png" id="img" />
        </div>
        <span>Date of Publication - 5 min read. By: JG</span>
        <div className="blog-text">
          <p>
            My name is Joseph Godwin, hence my logo <b>JG</b>. I reside in
            Lagos, Nigeria.
            <br />I am just another guy passionate about delivering solutions
            through technology, and to be specific, Javascript as a programming
            language. I build scalable web and mobile applications using Node
            Js, React Js, React Native, Flutter and other industry standard
            technologies, Also maintaining industry principles and workflows{" "}
            <br /> Aside programming, I LOVE LIFE!!! I love music, sports and
            being part of success stories.. <br /> Enough about me, Let's
            checkout other stuff here&#128522;.
          </p>
        </div>
      </div>
    </div>
  );
}
