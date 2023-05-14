import React from "react";

const About = () => {
  return (
    <div id="section1">
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            A diligent, motivated and result-oriented frontend developer, eager
            to work with/contribute to team success through hard work, attention
            to details and excellent organizational skills, well versed in
            JavaScript and React, have a clear understanding of Software
            development lifecycle and object-oriented programming concept.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Country: </strong> Nigeria
              </p>
              <p>
                <strong>Email: </strong>temfoden@gmail.com
              </p>
              <p>
                <strong>Phone: </strong>(+234) 706 700 1568
              </p>
            </div>
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Language: </strong>English
              </p>
              <p>
                <strong>Github: </strong>
                <a href="https://github.com/linuxmathew">here</a>
              </p>
              <p>
                <strong>Linkedin: </strong>
                <a href="https://www.linkedin.com/in/temitayo-afolabi-aa47a4211/">
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
