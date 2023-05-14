import React from "react";
import ImageTag from "./utilities/ImageTag";
import rgains from "../images/rgains.png";
import zeeh from "../images/zeeh.png";
import demo from "../images/demo.gif";
import travs from "../images/travs.png";
import cameo from "../images/cameo.png";
import restaurant from "../images/restaurant.png";

const Portfolios = () => {
  return (
    <div id="section5">
      <div className="card">
        <div className="card-content">
          <div style={{ marginBottom: "20px" }}>
            <h6>
              <strong>PROJECTS</strong>
            </h6>
          </div>

          <ImageTag
            source={rgains}
            alt=""
            tag="ResearchGains Website"
            link="https://researchgains.com"
            tech="React, Context API, RESTful API"
            description="Data-centric platform that allows researchers to get targeted respondents to respond to their questionnaire and get analysis in real-time"
          />
          <ImageTag
            source={demo}
            alt=""
            tag="fyyur Musical Website"
            link="https://github.com/linuxmathew/fyyur-Artist_booking_site"
            tech="Python, Flask, postgreSQL, sqlAlchemyORM"
            description="Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and list shows with artists as a venue owner. This project involved building out the data models to power the API endpoints for the Fyyur site by connecting to a PostgreSQL database for storing, querying, and creating information about artists and venues on Fyyur."
          />
          <ImageTag
            source={zeeh}
            alt=""
            tag="ZeehAfrica Landing Page"
            link="https://zeehafrica.netlify.app"
            tech="HTML, CSS, Bootstrap, JavaScript"
          />
          <ImageTag
            source={travs}
            alt="Trav Travelling"
            tag="Travs"
            link="https://testkemiproject.netlify.app"
            tech="HTML, CSS, Bootstrap, JavaScript"
            description="A transportation booking website that allows passengers to book transportation ahead of departure time. A prototype for a final year project "
          />
          <ImageTag
            source={restaurant}
            alt="SH-Pizza"
            tag="SH-Pizza"
            link="https://sh-restaurant-app.netlify.app"
            tech="HTML, CSS, Bootstrap, JavaScript, ReactJs"
          />
          <ImageTag
            source={cameo}
            alt="Cameo Landing Page"
            tag="Cameo Landing"
            link="https://cameopage.netlify.app/"
            tech="HTML, CSS, Bootstrap, Vanilla Js"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
