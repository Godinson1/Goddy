import React from "react";
import "./scss/index.scss";

export default function About() {
  return (
    <div>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="about" data-aos="fade-right">
          <div>
            <h2 id="text">More about Me?</h2>
            <div className="about-container">
              <h2>Hi, &#128075;</h2>
              <br />
              <br />
              <p className="about-text">
                My name is Joseph Godwin, hence my logo <b>JG</b>. I reside in
                Lagos, Nigeria.
                <br />I am just another guy passionate about delivering
                solutions through technology, and to be specific, Javascript as
                a programming language. I build scalable web and mobile
                applications using Node Js, React Js, React Native, Flutter and
                other industry standard technologies, Also maintaining industry
                principles and workflows <br /> Aside programming, I LOVE
                LIFE!!! I love music, sports and being part of success stories..{" "}
                <br /> Enough about me, Let's checkout other stuff
                here&#128522;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
